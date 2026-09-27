import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface CtaBandProps {
    eyebrow?: string;
    title: ReactNode;
    body?: ReactNode;
    ctaLabel: string;
    ctaHref: string;
}

export function CtaBand({ eyebrow, title, body, ctaLabel, ctaHref }: CtaBandProps) {
    return (
        <section className="border-border bg-muted/30 border-y py-20">
            <ScrollReveal className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-10">
                {eyebrow && <p className="text-primary mb-4 text-xs font-bold tracking-[0.2em] uppercase">{eyebrow}</p>}
                <h2 className="font-serif text-3xl leading-tight font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
                {body && <p className="text-muted-foreground mt-4 text-base md:text-lg">{body}</p>}
                <Button asChild size="xl" className="mt-8">
                    <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
            </ScrollReveal>
        </section>
    );
}
