import { ContactForm } from '@/components/marketing/contact-form';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SpeakingTopicItem } from '@/types/marketing';
import { Head } from '@inertiajs/react';

interface ContactProps {
    speakingTopics: SpeakingTopicItem[];
    defaultTopic: string | null;
}

export default function Contact({ speakingTopics, defaultTopic }: ContactProps) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('contact.heading')} />

            <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-10">
                <ScrollReveal className="max-w-2xl">
                    <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{t('contact.eyebrow')}</p>
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{t('contact.heading')}</h1>
                    <p className="text-muted-foreground mt-5 text-lg">{t('contact.body')}</p>
                </ScrollReveal>

                <ScrollReveal delay={0.1} className="mt-12">
                    <ContactForm speakingTopics={speakingTopics} defaultTopic={defaultTopic} />
                </ScrollReveal>
            </section>
        </MarketingLayout>
    );
}
