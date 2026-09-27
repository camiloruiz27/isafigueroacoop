import { NewsletterForm } from '@/components/marketing/newsletter-form';
import { SiteLogo } from '@/components/marketing/site-logo';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const NAV_ITEMS = [
    { key: 'home', route: 'home' },
    { key: 'about', route: 'about' },
    { key: 'speaking', route: 'speaking.index' },
    { key: 'press', route: 'press' },
    { key: 'blog', route: 'blog.index' },
    { key: 'contact', route: 'contact.create' },
] as const;

const SOCIAL_LINKS = [
    { icon: Facebook, href: 'https://www.facebook.com/isabelladelegadacoop', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/isabelladelegadacoop', label: 'X' },
    { icon: Instagram, href: 'https://www.instagram.com/isabelladelegadacoop/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@IsaFigueroaE', label: 'YouTube' },
] as const;

export function SiteFooter() {
    const { t, r } = useTranslation();

    return (
        <footer className="border-border bg-brand-purple-950 border-t text-white">
            <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
                <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
                    <div className="max-w-md">
                        <h3 className="font-serif text-2xl font-medium">{t('footer.newsletter.heading')}</h3>
                        <p className="mt-2 text-sm text-white/70">{t('footer.newsletter.body')}</p>
                    </div>
                    <NewsletterForm />
                </div>

                <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-3">
                    <div>
                        <SiteLogo inverted />
                        <p className="mt-3 text-sm text-white/60">{t('footer.tagline')}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">{t('footer.nav')}</p>
                        <ul className="mt-4 space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.key}>
                                    <Link href={r(item.route)} className="text-sm text-white/70 transition-colors hover:text-white">
                                        {t(`nav.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">{t('footer.legal')}</p>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href={r('legal.privacy')} className="text-sm text-white/70 transition-colors hover:text-white">
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href={r('legal.terms')} className="text-sm text-white/70 transition-colors hover:text-white">
                                    {t('footer.terms')}
                                </Link>
                            </li>
                        </ul>

                        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">{t('footer.follow')}</p>
                        <div className="mt-4 flex gap-4">
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={label}
                                    className="text-white/70 transition-colors hover:text-white"
                                >
                                    <Icon className="size-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="pt-8 text-xs text-white/40">
                    © {new Date().getFullYear()} {t('meta.siteName')}. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
}
