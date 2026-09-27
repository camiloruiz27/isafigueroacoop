import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface CtaBandProps {
    eyebrow?: string;
    title: ReactNode;
    body?: ReactNode;
    ctaLabel: string;
    ctaHref: string;
    variant?: 'primary' | 'secondary';
}

export function CtaBand({ eyebrow, title, body, ctaLabel, ctaHref, variant = 'primary' }: CtaBandProps) {
    return (
        <section className={cn('py-20', variant === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-brand-purple-950 text-white')}>
            <ScrollReveal className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-10">
                {eyebrow && <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase opacity-70">{eyebrow}</p>}
                <h2 className="font-serif text-3xl leading-tight font-medium text-balance md:text-4xl">{title}</h2>
                {body && <p className="mt-4 text-base opacity-80 md:text-lg">{body}</p>}
                <Button asChild size="xl" variant="secondary" className="text-primary mt-8 bg-white hover:bg-white/90">
                    <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
            </ScrollReveal>
        </section>
    );
}
