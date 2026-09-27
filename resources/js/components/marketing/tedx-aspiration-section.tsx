import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type TedxContent } from '@/types/marketing';
import { Link } from '@inertiajs/react';

export function TedxAspirationSection({ tedx }: { tedx: TedxContent }) {
    const { t, r } = useTranslation();

    if (!tedx.heading && !tedx.body) return null;

    return (
        <section className="bg-brand-purple-950 py-24 text-white">
            <ScrollReveal className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
                <p className="text-brand-lime-400 mb-4 text-xs font-semibold tracking-[0.2em] uppercase">{t('home.tedx.eyebrow')}</p>
                <h2 className="font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{tedx.heading}</h2>
                <p className="mt-6 text-base text-white/75 md:text-lg">{tedx.body}</p>
                <Button asChild size="xl" className="bg-brand-lime-400 text-brand-purple-950 hover:bg-brand-lime-300 mt-9">
                    <Link href={r('contact.create')}>{t('home.tedx.cta')}</Link>
                </Button>
            </ScrollReveal>
        </section>
    );
}
