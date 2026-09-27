import { useTranslation } from '@/lib/i18n/i18n-context';
import { animate, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
    value: string;
    label: string;
}

/** Splits "+10.000" into a numeric part to animate and the surrounding text to keep static. */
function parseValue(raw: string): { prefix: string; number: number; suffix: string } {
    const match = raw.match(/^(\D*)([\d.,]+)(\D*)$/);

    if (!match) {
        return { prefix: '', number: 0, suffix: raw };
    }

    const [, prefix, digits, suffix] = match;
    const number = Number(digits.replace(/[.,]/g, ''));

    return { prefix, number, suffix };
}

export function StatCounter({ value, label }: StatCounterProps) {
    const { locale } = useTranslation();
    const ref = useRef<HTMLParagraphElement>(null);
    const [isInView, setIsInView] = useState(false);
    const shouldReduceMotion = useReducedMotion();
    const { prefix, number, suffix } = parseValue(value);
    const [displayNumber, setDisplayNumber] = useState(shouldReduceMotion ? number : 0);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 },
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        if (shouldReduceMotion) {
            setDisplayNumber(number);

            return;
        }

        const controls = animate(0, number, {
            duration: 1.6,
            ease: 'easeOut',
            onUpdate: (latest) => setDisplayNumber(Math.round(latest)),
        });

        return () => controls.stop();
    }, [isInView, number, shouldReduceMotion]);

    return (
        <div>
            <p ref={ref} className="text-primary font-serif text-4xl font-medium md:text-5xl">
                {prefix}
                {new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'es-CO').format(displayNumber)}
                {suffix}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">{label}</p>
        </div>
    );
}
