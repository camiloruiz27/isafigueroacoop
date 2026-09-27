import { LanguageSwitcher } from '@/components/marketing/language-switcher';
import { MobileNav } from '@/components/marketing/mobile-nav';
import { SiteLogo } from '@/components/marketing/site-logo';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';

const NAV_ITEMS = [
    { key: 'home', route: 'home' },
    { key: 'about', route: 'about' },
    { key: 'speaking', route: 'speaking.index' },
    { key: 'press', route: 'press' },
    { key: 'gallery', route: 'gallery' },
    { key: 'blog', route: 'blog.index' },
] as const;

export function SiteHeader() {
    const { t, r } = useTranslation();
    const { url } = usePage();

    return (
        <header className="border-border/70 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
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
                                    'text-muted-foreground hover:text-foreground text-sm font-medium transition-colors',
                                    isActive && 'text-foreground',
                                )}
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-3">
                    <LanguageSwitcher className="hidden sm:flex" />
                    <Button asChild size="sm" className="hidden md:inline-flex">
                        <Link href={r('contact.create')}>{t('nav.cta')}</Link>
                    </Button>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
