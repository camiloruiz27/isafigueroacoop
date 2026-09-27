import { MediaFrame } from '@/components/marketing/media-frame';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Timeline } from '@/components/marketing/timeline';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type BioContent } from '@/types/marketing';
import { Head } from '@inertiajs/react';

export default function About({ bio }: { bio: BioContent }) {
    const { t, dict } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={dict.about.eyebrow} />

            <section className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12">
                    <ScrollReveal className="lg:col-span-4">
                        <MediaFrame src={bio.photoPath} alt={bio.heading ?? ''} className="aspect-4/5 w-full" />
                        {bio.collaboratorName && (
                            <p className="text-muted-foreground mt-4 text-sm">
                                {t('about.collaboratorIntro')} <span className="text-foreground font-medium">{bio.collaboratorName}</span>
                                {bio.collaboratorRole && `, ${bio.collaboratorRole}`}
                            </p>
                        )}
                    </ScrollReveal>

                    <ScrollReveal delay={0.1} className="lg:col-span-8">
                        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('about.eyebrow')}</p>
                        <h1 className="mt-3 font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">{bio.heading}</h1>
                        <div
                            className="prose-content text-muted-foreground mt-6 text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: bio.body ?? '' }}
                        />
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-muted/40 py-24">
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
                    <ScrollReveal className="max-w-xl">
                        <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('about.timelineEyebrow')}</p>
                        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight">{t('about.timelineHeading')}</h2>
                    </ScrollReveal>

                    <div className="mt-12 max-w-2xl">
                        <Timeline milestones={dict.about.milestones} />
                    </div>
                </div>
            </section>
        </MarketingLayout>
    );
}
