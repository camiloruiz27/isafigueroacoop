import { BlogPostCard } from '@/components/marketing/blog-post-card';
import { CredibilityBar } from '@/components/marketing/credibility-bar';
import { CtaBand } from '@/components/marketing/cta-band';
import { Hero } from '@/components/marketing/hero';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import { SectionHeading } from '@/components/marketing/section-heading';
import { SpeakingTopicCard } from '@/components/marketing/speaking-topic-card';
import { StatsSection } from '@/components/marketing/stats-section';
import { TedxAspirationSection } from '@/components/marketing/tedx-aspiration-section';
import { TestimonialCarousel } from '@/components/marketing/testimonial-carousel';
import { Button } from '@/components/ui/button';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import {
    type BioContent,
    type BlogPostSummary,
    type HeroContent,
    type PressMentionItem,
    type SiteStatItem,
    type SpeakingTopicItem,
    type TedxContent,
    type TestimonialItem,
} from '@/types/marketing';
import { Head, Link } from '@inertiajs/react';

interface HomeProps {
    hero: HeroContent;
    bio: BioContent;
    tedx: TedxContent;
    stats: SiteStatItem[];
    speakingTopics: SpeakingTopicItem[];
    testimonials: TestimonialItem[];
    pressMentions: PressMentionItem[];
    latestPosts: BlogPostSummary[];
}

export default function Home({ hero, bio, tedx, stats, speakingTopics, testimonials, pressMentions, latestPosts }: HomeProps) {
    const { t, r } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={hero.heading ?? undefined} />

            <Hero hero={hero} />
            <CredibilityBar pressMentions={pressMentions} />
            <StatsSection stats={stats} />

            {speakingTopics.length > 0 && (
                <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10">
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                        <SectionHeading
                            eyebrow={t('home.speaking.eyebrow')}
                            title={t('home.speaking.heading')}
                            description={t('home.speaking.body')}
                        />
                        <ScrollReveal>
                            <Button asChild variant="outline">
                                <Link href={r('speaking.index')}>{t('home.speaking.cta')}</Link>
                            </Button>
                        </ScrollReveal>
                    </div>

                    <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {speakingTopics.map((topic) => (
                            <StaggerItem key={topic.id}>
                                <SpeakingTopicCard topic={topic} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </section>
            )}

            {bio.body && (
                <section className="bg-muted/40 py-24">
                    <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
                        <ScrollReveal className="lg:col-span-4">
                            <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">{t('about.eyebrow')}</p>
                            <h2 className="mt-3 font-serif text-3xl font-medium">{bio.heading}</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1} className="lg:col-span-8">
                            <p className="font-serif text-xl leading-relaxed text-balance md:text-2xl">{bio.body}</p>
                            <Link href={r('about')} className="text-primary mt-6 inline-block text-sm font-medium hover:underline">
                                {t('nav.about')} →
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {testimonials.length > 0 && (
                <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10">
                    <SectionHeading
                        eyebrow={t('home.testimonials.eyebrow')}
                        title={t('home.testimonials.heading')}
                        align="center"
                        className="mx-auto mb-12"
                    />
                    <TestimonialCarousel testimonials={testimonials} />
                </section>
            )}

            <TedxAspirationSection tedx={tedx} />

            {latestPosts.length > 0 && (
                <section className="mx-auto max-w-[1400px] px-4 py-24 sm:px-6 lg:px-10">
                    <div className="flex items-end justify-between gap-6">
                        <SectionHeading eyebrow={t('blog.eyebrow')} title={t('blog.heading')} />
                        <ScrollReveal>
                            <Button asChild variant="outline">
                                <Link href={r('blog.index')}>{t('blog.backToBlog')}</Link>
                            </Button>
                        </ScrollReveal>
                    </div>
                    <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {latestPosts.map((post) => (
                            <StaggerItem key={post.id}>
                                <BlogPostCard post={post} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                </section>
            )}

            <CtaBand
                eyebrow={t('home.finalCta.eyebrow')}
                title={t('home.finalCta.heading')}
                body={t('home.finalCta.body')}
                ctaLabel={t('home.finalCta.cta')}
                ctaHref={r('contact.create')}
            />
        </MarketingLayout>
    );
}
