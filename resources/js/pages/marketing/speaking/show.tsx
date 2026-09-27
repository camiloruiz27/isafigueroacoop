import { MediaFrame } from '@/components/marketing/media-frame';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Button } from '@/components/ui/button';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SpeakingTopicItem } from '@/types/marketing';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function SpeakingShow({ speakingTopic }: { speakingTopic: SpeakingTopicItem }) {
    const { t, r } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={speakingTopic.title} />

            <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
                <Link
                    href={r('speaking.index')}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium"
                >
                    <ArrowLeft className="size-4" />
                    {t('speaking.backToAll')}
                </Link>

                <div className="mt-8 grid gap-12 lg:grid-cols-12">
                    <ScrollReveal className="lg:col-span-5">
                        <MediaFrame src={speakingTopic.image_path} alt={speakingTopic.title} className="aspect-4/5 w-full" />
                    </ScrollReveal>

                    <ScrollReveal delay={0.1} className="lg:col-span-7">
                        <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{t('speaking.eyebrow')}</p>
                        <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{speakingTopic.title}</h1>
                        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">{speakingTopic.description}</p>
                        <Button asChild size="xl" className="mt-9">
                            <Link href={r('contact.create', { topic: speakingTopic.title })}>{t('speaking.requestCta')}</Link>
                        </Button>
                    </ScrollReveal>
                </div>
            </section>
        </MarketingLayout>
    );
}
