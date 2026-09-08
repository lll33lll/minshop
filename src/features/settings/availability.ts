import type { StoreSettings } from './db';

export interface RuntimeCapabilities {
  vault: boolean;
  authSecret: boolean;
  images: boolean;
  emailBinding: boolean;
  ai: boolean;
  vectorize: boolean;
}

export interface SettingAvailability {
  available: boolean;
  reason?: string;
}

const hasSecret = (settings: StoreSettings, caps: RuntimeCapabilities, name: string): boolean =>
  caps.vault && settings.configuredSecrets.includes(name);

export function stripeConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  return (
    hasSecret(settings, caps, 'stripe_secret_key') &&
    hasSecret(settings, caps, 'stripe_webhook_secret')
  );
}

export function emailConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  if (!settings.emailEnabled) return false;
  return settings.emailProvider === 'cloudflare'
    ? caps.emailBinding
    : hasSecret(settings, caps, 'resend_api_key');
}

export function featureAvailability(
  key: string,
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): SettingAvailability {
  if (key === 'discounts_enabled' || key === 'tax_enabled') {
    return stripeConfigured(settings, caps)
      ? { available: true }
      : { available: false, reason: 'Stripe 配置完成后可用' };
  }
  if (key === 'accounts_enabled') {
    if (!caps.authSecret) {
      return { available: false, reason: '设置 AUTH_SECRET 后可用' };
    }
    if (!emailConfigured(settings, caps)) {
      return { available: false, reason: '启用并配置邮件后才可用' };
    }
  }
  if (key === 'image_optimize' && !caps.images) {
    return { available: false, reason: '添加 IMAGES 绑定后可用' };
  }
  return { available: true };
}

export function semanticSearchAvailable(caps: RuntimeCapabilities): boolean {
  return caps.ai && caps.vectorize;
}

export function lightningConfigurationError(
  backend: 'lnbits' | 'phoenixd',
  url: string,
  hasCredential: boolean,
): string | null {
  const label = backend === 'lnbits' ? 'LNbits' : 'phoenixd';
  if (!url) return `请填写 ${label} 地址。`;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return `请填写有效的 ${label} HTTP(S) 地址。`;
    }
  } catch {
    return `请填写有效的 ${label} HTTP(S) 地址。`;
  }
  if (!hasCredential) {
    return backend === 'lnbits'
      ? '请填写 LNbits invoice/read 密钥。'
      : '请填写 phoenixd 密码。';
  }
  return null;
}

export function turnstileConfigured(
  settings: StoreSettings,
  caps: RuntimeCapabilities,
): boolean {
  return (
    caps.vault &&
    !!settings.turnstileSiteKey &&
    settings.configuredSecrets.includes('turnstile_secret_key')
  );
}
