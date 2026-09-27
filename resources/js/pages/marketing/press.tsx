import { PressMentionCard } from '@/components/marketing/press-mention-card';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type PressMentionItem } from '@/types/marketing';
import { Head } from '@inertiajs/react';

export default function Press({ pressMentions }: { pressMentions: PressMentionItem[] }) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('press.heading')} />

            <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-24 sm:px-6 lg:px-10">
                <ScrollReveal className="max-w-2xl">
                    <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{t('press.eyebrow')}</p>
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{t('press.heading')}</h1>
                    <p className="text-muted-foreground mt-5 text-lg">{t('press.intro')}</p>
                </ScrollReveal>

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {pressMentions.map((mention) => (
                        <StaggerItem key={mention.id}>
                            <PressMentionCard mention={mention} />
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </section>
        </MarketingLayout>
    );
}
