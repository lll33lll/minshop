import { getConfig } from '../../config';
import type { Order } from '../orders/db';
import { orderReference } from '../orders/number';
import type { EmailMessage } from './provider';
import { PALETTE, emailShell, emailButton, escapeHtml } from './layout';

/**
 * Build the guest-link reissue email. Sent when support rotates an order's
 * access token (a reported forwarded/leaked link): the previous links stop
 * working the moment the rotation lands, so this message is the only path the
 * replacement credential is allowed to travel — admin output never shows it.
 * `guestOrderUrl` is the tokenized /order/<token> link, an allowlisted
 * customer-email token position. `order.email` must be set.
 */
export function guestLinkReissueEmail(
  order: Order,
  storeName: string,
  guestOrderUrl: string,
): EmailMessage {
  const num = orderReference(order.public_id, order.id, getConfig().orderNumber);

  const text = [
    `这是你的 ${storeName} 订单 ${num} 的新链接。`,
    ``,
    `之前邮件里的链接已全部失效——今后请使用这个链接：`,
    guestOrderUrl,
    ``,
    `如果你没有申请新链接，忽略此邮件即可；新链接`,
    `照常显示你的订单。`,
  ].join('\n');

  const html = emailShell({
    storeName,
    heading: '你的新订单链接',
    subheading: `订单 ${escapeHtml(num)} 的新链接。`,
    body:
      `<p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:${PALETTE.muted};">` +
      `之前邮件里的链接已全部失效——今后请使用这个链接。</p>` +
      emailButton(guestOrderUrl, '查看订单'),
    footer: `如果你没有申请新链接，忽略此邮件即可。`,
  });

  return {
    to: order.email!,
    subject: `你的 ${storeName} 订单新链接（${num}）`,
    html,
    text,
  };
}
