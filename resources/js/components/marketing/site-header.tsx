import { LanguageSwitcher } from '@/components/marketing/language-switcher';
import { MobileNav } from '@/components/marketing/mobile-nav';
import { SiteLogo } from '@/components/marketing/site-logo';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
    { key: 'home', route: 'home' },
    { key: 'about', route: 'about' },
    { key: 'speaking', route: 'speaking.index' },
    { key: 'press', route: 'press' },
    { key: 'gallery', route: 'gallery' },
    { key: 'blog', route: 'blog.index' },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
    const { t, r } = useTranslation();
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(!transparent);

    useEffect(() => {
        if (!transparent) return;

        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [transparent]);

    const isLight = transparent && !scrolled;

    return (
        <header
            className={cn(
                'fixed top-0 z-40 w-full transition-all duration-700',
                isLight ? 'bg-transparent py-8' : 'bg-background/95 border-border/70 border-b py-4 shadow-sm backdrop-blur-md',
            )}
        >
            <div style={{ height: 'env(safe-area-inset-top)' }} />
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
                <Link href={r('home')} className="shrink-0">
                    <SiteLogo />
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV_ITEMS.map((item) => {
                        const href = r(item.route);
                        const isActive = url === new URL(href, window.location.origin).pathname;

                        return (
                            <Link
                                key={item.key}
                                href={href}
                                className={cn(
                                    'group relative overflow-hidden py-1 text-xs font-bold tracking-[0.2em] uppercase',
                                    isLight ? 'text-white/90' : 'text-muted-foreground',
                                    isActive && (isLight ? 'text-white' : 'text-foreground'),
                                )}
                            >
                                <span>{t(`nav.${item.key}`)}</span>
                                <span
                                    className={cn(
                                        'absolute bottom-0 left-0 h-[2px] w-full -translate-x-full rounded-full transition-transform duration-300 group-hover:translate-x-0',
                                        isLight ? 'bg-white' : 'bg-primary',
                                    )}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher className="hidden sm:flex" light={isLight} />
                    <Button asChild size="sm" className="hidden md:inline-flex">
                        <Link href={r('contact.create')}>{t('nav.cta')}</Link>
                    </Button>
                    <MobileNav light={isLight} />
                </div>
            </div>
        </header>
    );
}
