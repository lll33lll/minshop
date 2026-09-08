import { formatPrice, getConfig } from '../../config';
import type { Order, OrderItemWithImage, ShippingAddress } from '../orders/db';
import { orderReference } from '../orders/number';
import {
  productEmailImageUrl,
  type ImageDelivery,
} from '../products/image';
import { carrierName, trackingUrl } from '../orders/tracking';
import type { EmailMessage } from './provider';
import {
  PALETTE,
  emailShell,
  emailButton,
  emailLabel,
  emailItemsTable,
  escapeHtml,
  type TotalRow,
} from './layout';

/** A 48px product thumbnail cell (absolute URL so email clients can fetch it).
 *  `new URL` resolves both an absolute image base (R2 domain) and the relative
 *  /images route against the site origin. */
const thumbCell = (
  imageKey: string | null,
  baseUrl: string,
  imageDelivery: ImageDelivery,
): string => {
  const src = productEmailImageUrl(
    imageKey,
    baseUrl,
    getConfig().images.baseUrl,
    imageDelivery,
  );
  return `<td style="width:60px;padding:10px 0;border-bottom:1px solid ${PALETTE.line};"><img src="${escapeHtml(src)}" width="48" height="48" alt="" style="display:block;border-radius:4px;object-fit:cover;background:${PALETTE.paper};" /></td>`;
};

/** Shipping / discount / tax / total, in the order they appear on a receipt. */
function totalRows(order: Order, money: (cents: number) => string): TotalRow[] {
  return [
    ...(order.shipping_cents > 0 ? [{ label: '运费', amount: money(order.shipping_cents) }] : []),
    ...(order.discount_cents > 0
      ? [{ label: '优惠', amount: `&minus;${money(order.discount_cents)}` }]
      : []),
    ...(order.tax_cents > 0 ? [{ label: '税费', amount: money(order.tax_cents) }] : []),
    { label: '合计', amount: money(order.amount_total_cents), strong: true },
  ];
}

/** One-line-per-field shipping address, blank lines dropped. */
function formatShipAddress(order: Order): string {
  if (!order.ship_address) return '-';
  const a = JSON.parse(order.ship_address) as ShippingAddress;
  return [
    a.name,
    a.line1,
    a.line2,
    [a.city, a.state, a.postal].filter(Boolean).join(', '),
    a.country,
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Build the order-confirmation email for a paid order. `order.email` must be set.
 * `baseUrl` is the site origin (e.g. https://shop.example.com) for the order link.
 */
export function orderConfirmationEmail(
  order: Order,
  items: OrderItemWithImage[],
  baseUrl: string,
  storeName: string,
  imageDelivery: ImageDelivery = 'original',
  /** Tokenized guest link (allowlisted email position); null = omit the link. */
  guestOrderUrl?: string | null,
): EmailMessage {
  const cfg = getConfig();
  const num = orderReference(order.public_id, order.id, cfg.orderNumber);
  const money = (cents: number) => formatPrice(cents, order.currency);
  const orderUrl = guestOrderUrl ?? null;
  const hasDigital = items.some((item) => Boolean(item.file_key));

  const rows = items.map(
    (it) => `${it.name} × ${it.quantity}: ${money(it.price_cents * it.quantity)}`,
  );

  const text = [
    `感谢下单！`,
    ``,
    `订单 ${num} · ${storeName}`,
    ``,
    ...rows,
    ...(order.shipping_cents > 0 ? [`运费：${money(order.shipping_cents)}`] : []),
    ...(order.discount_cents > 0 ? [`优惠：-${money(order.discount_cents)}`] : []),
    ...(order.tax_cents > 0 ? [`税费：${money(order.tax_cents)}`] : []),
    `合计：${money(order.amount_total_cents)}`,
    ...(hasDigital && orderUrl ? [``, `你的下载已就绪。`] : []),
    ...(orderUrl ? [``, `查看订单：${orderUrl}`] : []),
  ].join('\n');

  const html = emailShell({
    storeName,
    heading: '感谢下单',
    subheading: `订单 ${num} 已确认。发货后我们会再邮件通知你。`,
    body:
      emailItemsTable(
        items.map((it) => ({
          thumb: thumbCell(it.image_key, baseUrl, imageDelivery),
          name: it.name,
          quantity: it.quantity,
          amount: money(it.price_cents * it.quantity),
        })),
        totalRows(order, money),
      ) +
      (hasDigital && orderUrl
        ? `<p style="margin:20px 0 0;font-size:14px;">你的下载已就绪。</p>`
        : '') +
      (orderUrl ? emailButton(orderUrl, '查看订单') : ''),
    footer: `对订单有疑问？直接回复这封邮件即可。`,
  });

  return {
    to: order.email!,
    subject: `你的 ${storeName} 订单 ${num}`,
    html,
    text,
  };
}

/**
 * Build the store-owner "new order" notification. `to` is the owner address;
 * `baseUrl` is the site origin for the admin order link.
 */
export function orderNotificationEmail(
  order: Order,
  items: OrderItemWithImage[],
  to: string,
  baseUrl: string,
  storeName: string,
  imageDelivery: ImageDelivery = 'original',
): EmailMessage {
  const publicId = order.public_id ?? '—';
  // ASCII hyphen on purpose: a non-ASCII char anywhere in a header forces RFC
  // 2047 encoded-words, which read as "=?utf-8?b?...?=" in raw logs. The em
  // dashes in the BODY are fine — bodies declare their charset.
  const subjectPublicId = order.public_id ? ` - ${order.public_id}` : '';
  const money = (cents: number) => formatPrice(cents, order.currency);
  const shipText = formatShipAddress(order);
  const adminUrl = `${baseUrl}/admin/orders/${order.public_id ?? order.id}`;

  const rows = items.map(
    (it) => `${it.name} × ${it.quantity}: ${money(it.price_cents * it.quantity)}`,
  );

  const text = [
    `新订单 ${order.id}`,
    `公开 ID: ${publicId}`,
    ``,
    `Customer: ${order.email ?? '-'}`,
    ``,
    `收货信息：`,
    shipText,
    ``,
    ...rows,
    ...(order.shipping_cents > 0 ? [`运费：${money(order.shipping_cents)}`] : []),
    ...(order.discount_cents > 0 ? [`优惠：-${money(order.discount_cents)}`] : []),
    ...(order.tax_cents > 0 ? [`税费：${money(order.tax_cents)}`] : []),
    `合计：${money(order.amount_total_cents)}`,
    ``,
    `后台查看：${adminUrl}`,
  ].join('\n');

  const html = emailShell({
    storeName,
    heading: `新订单 ${order.id}`,
    subheading: `${money(order.amount_total_cents)} · ${escapeHtml(order.email ?? '未知地址')}`,
    body:
      emailLabel('订单标识') +
      `<p style="margin:0;font-size:14px;line-height:1.6;">订单号${order.id}<br><span style="font-family:monospace;">${escapeHtml(publicId)}</span></p>` +
      emailLabel('收货信息') +
      `<p style="margin:0;font-size:14px;line-height:1.6;">${escapeHtml(shipText).replace(/\n/g, '<br>')}</p>` +
      emailItemsTable(
        items.map((it) => ({
          thumb: thumbCell(it.image_key, baseUrl, imageDelivery),
          name: it.name,
          quantity: it.quantity,
          amount: money(it.price_cents * it.quantity),
        })),
        totalRows(order, money),
      ) +
      emailButton(adminUrl, '在后台查看'),
  });

  return {
    to,
    subject: `【${storeName}】新订单 ${order.id}${subjectPublicId}`,
    html,
    text,
  };
}

/** Build the "your order has shipped" email. `order.email` must be set. */
export function orderShippedEmail(
  order: Order,
  storeName: string,
  /** Tokenized guest link (allowlisted email position); null = omit the link. */
  guestOrderUrl?: string | null,
): EmailMessage {
  const cfg = getConfig();
  const num = orderReference(order.public_id, order.id, cfg.orderNumber);
  const url = trackingUrl(order.tracking_carrier, order.tracking_number);
  const orderUrl = guestOrderUrl ?? null;

  const text = [
    `你的订单 ${num} 已发货！`,
    ...(order.tracking_number
      ? [
          ``,
          `承运商：${carrierName(order.tracking_carrier)}`,
          `运单号：${order.tracking_number}`,
          ...(url ? [`追踪：${url}`] : []),
        ]
      : []),
    ...(orderUrl ? [``, `查看订单：${orderUrl}`] : []),
  ].join('\n');

  const trackingHtml = order.tracking_number
    ? emailLabel('物流信息') +
      `<p style="margin:0;font-size:14px;line-height:1.6;">
        ${escapeHtml(carrierName(order.tracking_carrier))}<br>
        ${
          url
            ? `<a href="${url}" style="color:${PALETTE.brand};font-weight:600;">${escapeHtml(order.tracking_number)}</a>`
            : escapeHtml(order.tracking_number)
        }
      </p>`
    : '';

  const html = emailShell({
    storeName,
    heading: '你的订单已发出',
    subheading: `订单 ${num} 已发货。`,
    body:
      trackingHtml +
      (url
        ? emailButton(url, '追踪包裹')
        : orderUrl
          ? emailButton(orderUrl, '查看订单')
          : ''),
    footer: orderUrl && url ? `订单详情：<a href="${orderUrl}" style="color:${PALETTE.muted};">${orderUrl}</a>` : undefined,
  });

  return {
    to: order.email!,
    subject: `你的 ${storeName} 订单 ${num} 已发货`,
    html,
    text,
  };
}

/**
 * Refund notice. Sent once per newly recognised refund — the amount the total
 * just advanced by, not the cumulative total — so a partial refund followed by
 * another reads as two distinct amounts rather than one growing number.
 *
 * `refundedCents` is the running total, shown only when it differs from this
 * refund, i.e. when there was an earlier one.
 */
export function orderRefundedEmail(
  order: Order,
  refundCents: number,
  refundedCents: number,
  storeName: string,
  /** Tokenized guest link (allowlisted email position); null = omit the link. */
  guestOrderUrl?: string | null,
): EmailMessage {
  const cfg = getConfig();
  const num = orderReference(order.public_id, order.id, cfg.orderNumber);
  const orderUrl = guestOrderUrl ?? null;
  const full = refundedCents >= order.amount_total_cents;
  const remaining = Math.max(0, order.amount_total_cents - refundedCents);
  const method = order.payment_method;

  // How the money actually gets back differs per rail, and the honest answer is
  // "it depends on your bank" for cards. Saying nothing invites a support email.
  const timing =
    method === 'stripe' || method === null
      ? '银行卡退款一般 5-10 个工作日到账，具体取决于你的银行。'
      : '退款已按原支付方式退回。';

  // Prices in the ORDER's currency, not the store's current one — an order
  // placed before a currency change must still read back in what was charged.
  const money = (cents: number) => formatPrice(cents, order.currency);

  const priorLine =
    refundedCents > refundCents ? `累计退款：${money(refundedCents)}` : null;

  const text = [
    full ? `你的订单 ${num} 已全额退款。` : `订单 ${num} 有一笔退款。`,
    ``,
    `本次退款：${money(refundCents)}`,
    ...(priorLine ? [priorLine] : []),
    ...(full ? [] : [`剩余已付：${money(remaining)}`]),
    ``,
    timing,
    ...(orderUrl ? [``, `查看订单：${orderUrl}`] : []),
  ].join('\n');

  const rows: TotalRow[] = [
    { label: '本次退款', amount: money(refundCents), strong: true },
    ...(priorLine ? [{ label: '累计退款', amount: money(refundedCents) }] : []),
    ...(full ? [] : [{ label: '剩余已付', amount: money(remaining) }]),
  ];

  const html = emailShell({
    storeName,
    heading: full ? '订单已全额退款' : '退款正在路上',
    subheading: `订单 ${num}`,
    body:
      emailLabel('退款') +
      `<table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">${rows
        .map(
          (r) =>
            `<tr><td style="padding:4px 0;font-size:14px;color:${PALETTE.muted};">${escapeHtml(r.label)}</td>` +
            `<td align="right" style="padding:4px 0;font-size:14px;${r.strong ? 'font-weight:600;' : ''}">${escapeHtml(r.amount)}</td></tr>`,
        )
        .join('')}</table>` +
      `<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${PALETTE.muted};">${escapeHtml(timing)}</p>` +
      (orderUrl ? emailButton(orderUrl, '查看订单') : ''),
  });

  return {
    to: order.email!,
    subject: full
      ? `你的 ${storeName} 订单 ${num} 已退款`
      : `你的 ${storeName} 订单 ${num} 退款通知`,
    html,
    text,
  };
}
