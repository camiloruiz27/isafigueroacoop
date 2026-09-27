import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import { SpeakingTopicCard } from '@/components/marketing/speaking-topic-card';
import { StickyMobileCta } from '@/components/marketing/sticky-mobile-cta';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SpeakingTopicItem } from '@/types/marketing';
import { Head } from '@inertiajs/react';

export default function SpeakingIndex({ speakingTopics }: { speakingTopics: SpeakingTopicItem[] }) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('speaking.heading')} />

            <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-24 sm:px-6 lg:px-10">
                <ScrollReveal className="max-w-2xl">
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('speaking.eyebrow')}</p>
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
                        {t('speaking.heading')}
                    </h1>
                    <p className="text-muted-foreground mt-5 text-lg">{t('speaking.intro')}</p>
                </ScrollReveal>

                <StaggerGroup className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {speakingTopics.map((topic) => (
                        <StaggerItem key={topic.id}>
                            <SpeakingTopicCard topic={topic} />
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </section>

            <StickyMobileCta />
            <div className="h-20 md:hidden" />
        </MarketingLayout>
    );
}
