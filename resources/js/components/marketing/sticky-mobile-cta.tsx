import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { Link } from '@inertiajs/react';

export function StickyMobileCta() {
    const { t, r } = useTranslation();

    return (
        <div
            className="border-border bg-background/95 fixed inset-x-0 bottom-0 z-30 border-t p-3 backdrop-blur-md md:hidden"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
            <Button asChild size="xl" className="w-full">
                <Link href={r('contact.create')}>{t('nav.cta')}</Link>
            </Button>
        </div>
    );
}
