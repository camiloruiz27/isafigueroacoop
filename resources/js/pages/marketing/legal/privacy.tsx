import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { Head } from '@inertiajs/react';

export default function LegalPrivacy({ body }: { body: string | null }) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('legal.privacyTitle')} />

            <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10">
                <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">{t('legal.privacyTitle')}</h1>
                <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: body ?? '' }} />
            </article>
        </MarketingLayout>
    );
}
