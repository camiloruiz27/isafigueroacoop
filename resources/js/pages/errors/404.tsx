import { Button } from '@/components/ui/button';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    const { t, r } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('notFound.eyebrow')} />

            <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center sm:px-6">
                <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('notFound.eyebrow')}</p>
                <h1 className="mt-4 font-serif text-6xl font-bold tracking-tight md:text-8xl">404</h1>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight">{t('notFound.heading')}</h2>
                <p className="text-muted-foreground mt-4">{t('notFound.body')}</p>
                <Button asChild size="xl" className="mt-8">
                    <Link href={r('home')}>{t('notFound.cta')}</Link>
                </Button>
            </section>
        </MarketingLayout>
    );
}
