import { useTranslation } from '@/lib/i18n/i18n-context';
import { withLocale } from '@/lib/i18n/locale-path';
import { cn } from '@/lib/utils';
import { router, usePage } from '@inertiajs/react';

export function LanguageSwitcher({ className }: { className?: string }) {
    const { locale } = useTranslation();
    const { url } = usePage();

    const switchTo = (target: 'es' | 'en') => {
        if (target === locale) return;

        router.visit(withLocale(url, target), { preserveScroll: true });
    };

    return (
        <div className={cn('flex items-center gap-1 text-sm font-medium', className)}>
            <button
                type="button"
                onClick={() => switchTo('es')}
                className={cn('px-1.5 py-1 transition-colors', locale === 'es' ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}
                aria-current={locale === 'es'}
            >
                ES
            </button>
            <span className="text-muted-foreground/50">/</span>
            <button
                type="button"
                onClick={() => switchTo('en')}
                className={cn('px-1.5 py-1 transition-colors', locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground')}
                aria-current={locale === 'en'}
            >
                EN
            </button>
        </div>
    );
}
