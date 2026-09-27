import { LanguageSwitcher } from '@/components/marketing/language-switcher';
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

export function MobileNav({ light = false }: { light?: boolean }) {
    const { t, r } = useTranslation();
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    // Guards against the overlay staying open after an Inertia navigation (e.g. browser back/forward).
    useEffect(() => {
        setOpen(false);
    }, [url]);

    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open]);

    const barClass = open ? 'bg-foreground' : light ? 'bg-white' : 'bg-foreground';

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? t('nav.close') : t('nav.menu')}
                aria-expanded={open}
                className="relative z-50 flex size-11 flex-col items-center justify-center space-y-1.5 md:hidden"
            >
                <span
                    className={cn(
                        'block h-[2px] w-6 rounded-full transition-transform duration-300',
                        barClass,
                        open && 'translate-y-[8px] rotate-45',
                    )}
                />
                <span className={cn('block h-[2px] w-6 rounded-full transition-opacity duration-300', barClass, open && 'opacity-0')} />
                <span
                    className={cn(
                        'block h-[2px] w-6 rounded-full transition-transform duration-300',
                        barClass,
                        open && '-translate-y-[8px] -rotate-45',
                    )}
                />
            </button>

            <div
                className={cn(
                    'bg-background/95 fixed inset-0 z-40 flex flex-col overflow-y-auto backdrop-blur-xl transition-all duration-500 md:hidden',
                    open ? 'visible opacity-100' : 'invisible opacity-0',
                )}
            >
                <div style={{ height: 'env(safe-area-inset-top)' }} className="shrink-0" />

                <div className="flex min-h-full flex-1 flex-col items-center justify-center gap-9 px-6 py-20 text-center">
                    <nav className="flex flex-col items-center space-y-7">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.key}
                                href={r(item.route)}
                                onClick={() => setOpen(false)}
                                className="hover:text-primary text-lg font-bold tracking-[0.2em] uppercase transition-colors"
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ))}
                    </nav>

                    <Button asChild size="xl">
                        <Link href={r('contact.create')} onClick={() => setOpen(false)}>
                            {t('nav.cta')}
                        </Link>
                    </Button>

                    <LanguageSwitcher className="text-base" />
                </div>

                <div style={{ height: 'env(safe-area-inset-bottom)' }} className="shrink-0" />
            </div>
        </>
    );
}
