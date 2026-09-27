import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type TedxContent } from '@/types/marketing';
import { Link } from '@inertiajs/react';

export function TedxAspirationSection({ tedx }: { tedx: TedxContent }) {
    const { t, r } = useTranslation();

    if (!tedx.heading && !tedx.body) return null;

    return (
        <section className="border-border border-y py-24">
            <ScrollReveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
                <p className="text-secondary mb-4 text-xs font-semibold tracking-[0.2em] uppercase">{t('home.tedx.eyebrow')}</p>
                <h2 className="font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{tedx.heading}</h2>
                <div
                    className="prose-content text-muted-foreground mx-auto mt-6 text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: tedx.body ?? '' }}
                />
                <Button asChild size="xl" className="mt-9">
                    <Link href={r('contact.create')}>{t('home.tedx.cta')}</Link>
                </Button>
            </ScrollReveal>
        </section>
    );
}
