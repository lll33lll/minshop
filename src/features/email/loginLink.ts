import type { EmailMessage } from './provider';
import { PALETTE, emailShell, emailButton } from './layout';

/** Passwordless sign-in email — a single-use, short-lived magic link. */
export function loginLinkEmail(to: string, link: string, storeName: string): EmailMessage {
  const subject = `登录 ${storeName}`;
  const text = `点击登录 ${storeName}：\n\n${link}\n\n此链接 15 分钟内有效。如果这不是你本人操作，忽略此邮件即可。`;
  const html = emailShell({
    storeName,
    heading: '登录',
    subheading: '此链接 15 分钟内有效，且只能使用一次。',
    body:
      emailButton(link, '登录') +
      `<p style="margin:0;font-size:12px;line-height:1.6;color:${PALETTE.muted};">
        按钮点不动？把下面的链接粘贴到浏览器打开：<br>
        <a href="${link}" style="color:${PALETTE.muted};word-break:break-all;">${link}</a>
      </p>`,
    footer: '如果这不是你本人操作，忽略此邮件即可。',
  });
  return { to, subject, html, text };
}
