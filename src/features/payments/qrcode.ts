import type { D1Database } from '@cloudflare/workers-types';
import type {
  PaymentProvider,
  CreateCheckoutParams,
  CheckoutResult,
  WebhookResult,
} from './provider';
import { createPendingPayment } from './lightning/pending';

export const QR_CHECKOUT_TTL_SECONDS = 48 * 60 * 60;

/**
 * 收款码（扫码支付，人工确认）provider。
 *
 * 个人微信/支付宝收款码没有 API、没有回调：买家在自渲染的 /pay 页扫码
 * 付款（备注订单号），商家在后台「订单 → 待确认收款」核对到账后点
 * 「确认已收款」完成结算（settleQrCheckout）。创建流程与 demo 通道一致：
 * 快照存 pending_payments（backend='qrcode'），跳转 /pay/<token>。
 */
export function createQrProvider(db: D1Database): PaymentProvider {
  return {
    async createCheckout(params: CreateCheckoutParams): Promise<CheckoutResult> {
      const subtotal = params.lineItems.reduce((s, li) => s + li.amountCents * li.quantity, 0);
      const shippingCents = params.selectedShipping?.amountCents ?? 0;
      const publicId = params.metadata?.public_id ?? crypto.randomUUID();
      await createPendingPayment(db, {
        publicId,
        paymentHash: `qrcode_${publicId}`, // 满足表的唯一 session id
        backend: 'qrcode',
        bolt11: null,
        amountSat: null,
        amountTotalCents: subtotal + shippingCents,
        currency: params.lineItems[0]?.currency ?? 'cny',
        email: params.selectedShipping?.email ?? null,
        itemsJson: params.orderItemsJson ?? null,
        shippingCents,
        shippingLabel: params.selectedShipping?.label ?? null,
        shippingWeightGrams: params.selectedShipping?.weightGrams ?? null,
        deliveryMethod: params.selectedShipping?.deliveryMethod ?? null,
        shipAddressJson: params.selectedShipping
          ? JSON.stringify(params.selectedShipping.address)
          : null,
        reservationId: params.metadata?.reservation_id ?? null,
        // 48 小时确认窗口：过期后 /pay 页拒绝渲染，后台确认也会失败。
        expiresAt: new Date(Date.now() + QR_CHECKOUT_TTL_SECONDS * 1000).toISOString(),
      });
      return { url: new URL(`/pay/${params.accessToken ?? publicId}`, params.successUrl).href };
    },

    async verifyWebhook(): Promise<WebhookResult> {
      throw new Error('收款码支付没有 webhook。');
    },
  };
}
