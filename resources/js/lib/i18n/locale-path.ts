import { type Locale } from './types';

/**
 * Rewrites a path so it points to the given locale, keeping the rest of the
 * path (Spanish lives at the root, English is prefixed with /en).
 */
export function withLocale(currentUrl: string, targetLocale: Locale): string {
    const url = new URL(currentUrl, 'http://placeholder.local');
    const segments = url.pathname.split('/').filter(Boolean);

    if (segments[0] === 'en') {
        segments.shift();
    }

    if (targetLocale === 'en') {
        segments.unshift('en');
    }

    const path = `/${segments.join('/')}`;

    return `${path}${url.search}`;
}
