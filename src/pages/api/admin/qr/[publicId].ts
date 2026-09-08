import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getPendingByPublicId } from '../../../../features/payments/lightning/pending';
import {
  settleQrCheckout,
  discardQrCheckout,
} from '../../../../features/payments/checkout/settle';
import { getStoreSettings } from '../../../../features/settings/db';

/**
 * 收款码人工确认入口（管理后台「订单 → 待确认收款」）。
 * - qr_confirm：商家核对到账后确认收款 → 走标准结算管线（订单、库存、
 *   凭证邮件、数字商品下载链接全部自动解锁）。
 * - qr_discard：放弃此收款单（pending 标记结算、不产生订单；库存预留
 *   到期后由定时任务自动释放）。
 * 表单提交，成功/失败一律 303 回 /admin/orders。
 */
export const POST: APIRoute = async ({ params, request, url }) => {
  const back = new URL('/admin/orders', url.origin);
  const publicId = params.publicId ?? '';
  const pending = await getPendingByPublicId(env.DB, publicId);
  if (!pending || pending.backend !== 'qrcode') {
    back.searchParams.set('qr_error', '收款单不存在或不是扫码支付。');
    return Response.redirect(back.href, 303);
  }
  const form = await request.formData();
  const action = String(form.get('_action') ?? '');
  if (action === 'qr_confirm') {
    const settings = await getStoreSettings(env.DB);
    const result = await settleQrCheckout(pending, url.origin, settings);
    if (!result.settled) back.searchParams.set('qr_error', result.error ?? '确认失败。');
    return Response.redirect(back.href, 303);
  }
  if (action === 'qr_discard') {
    await discardQrCheckout(env.DB, pending);
    return Response.redirect(back.href, 303);
  }
  back.searchParams.set('qr_error', '未知操作。');
  return Response.redirect(back.href, 303);
};
