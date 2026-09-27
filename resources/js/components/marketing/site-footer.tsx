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
    { key: 'gallery', route: 'gallery' },
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
        <footer className="border-border bg-muted/30 border-t">
            <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
                <div className="border-border flex flex-col justify-between gap-10 border-b pb-12 lg:flex-row lg:items-end">
                    <div className="max-w-md">
                        <h3 className="font-serif text-2xl font-bold tracking-tight">{t('footer.newsletter.heading')}</h3>
                        <p className="text-muted-foreground mt-2 text-sm">{t('footer.newsletter.body')}</p>
                    </div>
                    <NewsletterForm />
                </div>

                <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-3">
                    <div>
                        <SiteLogo />
                        <p className="text-muted-foreground mt-3 text-sm">{t('footer.tagline')}</p>
                    </div>

                    <div>
                        <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">{t('footer.nav')}</p>
                        <ul className="mt-4 space-y-2">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.key}>
                                    <Link href={r(item.route)} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                        {t(`nav.${item.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">{t('footer.legal')}</p>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href={r('legal.privacy')} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href={r('legal.terms')} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    {t('footer.terms')}
                                </Link>
                            </li>
                        </ul>

                        <p className="text-muted-foreground mt-6 text-xs font-bold tracking-[0.2em] uppercase">{t('footer.follow')}</p>
                        <div className="mt-4 flex gap-4">
                            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={label}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon className="size-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-muted-foreground/70 pt-8 text-xs">
                    © {new Date().getFullYear()} {t('meta.siteName')}. {t('footer.rights')}
                </p>
            </div>
        </footer>
    );
}
