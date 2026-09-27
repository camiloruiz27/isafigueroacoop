import { useTranslation } from '@/lib/i18n/i18n-context';
import { withLocale } from '@/lib/i18n/locale-path';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';

export function LanguageSwitcher({ className, light = false }: { className?: string; light?: boolean }) {
    const { locale } = useTranslation();
    const { url } = usePage();

    const switchTo = (target: 'es' | 'en') => {
        if (target === locale) return;

        router.visit(withLocale(url, target), { preserveScroll: true });
    };

    const activeClass = light ? 'text-white' : 'text-primary';
    const inactiveClass = light ? 'text-white/60 hover:text-white' : 'text-muted-foreground hover:text-foreground';

    return (
        <div className={cn('flex items-center gap-1 text-sm font-medium', className)}>
            <button
                type="button"
                onClick={() => switchTo('es')}
                className={cn('px-1.5 py-1 transition-colors', locale === 'es' ? activeClass : inactiveClass)}
                aria-current={locale === 'es'}
            >
                ES
            </button>
            <span className={cn(light ? 'text-white/40' : 'text-muted-foreground/50')}>/</span>
            <button
                type="button"
                onClick={() => switchTo('en')}
                className={cn('px-1.5 py-1 transition-colors', locale === 'en' ? activeClass : inactiveClass)}
                aria-current={locale === 'en'}
            >
                EN
            </button>
        </div>
    );
}
