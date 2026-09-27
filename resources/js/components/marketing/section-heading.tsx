import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface SectionHeadingProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    align?: 'left' | 'center';
    className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
    return (
        <ScrollReveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow && <p className="text-primary mb-3 text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</p>}
            <h2 className="font-serif text-3xl leading-tight font-medium text-balance md:text-4xl">{title}</h2>
            {description && <p className="text-muted-foreground mt-4 text-base md:text-lg">{description}</p>}
        </ScrollReveal>
    );
}
