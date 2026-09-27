import { useTranslation } from '@/lib/i18n/i18n-context';
import { type HeroContent } from '@/types/marketing';
import { Link } from '@inertiajs/react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { type MouseEvent } from 'react';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ hero }: { hero: HeroContent }) {
    const { t, r } = useTranslation();
    const shouldReduceMotion = useReducedMotion();

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const x = useSpring(rawX, { stiffness: 60, damping: 20 });
    const y = useSpring(rawY, { stiffness: 60, damping: 20 });
    const translateX = useTransform(x, (value) => `${value}px`);
    const translateY = useTransform(y, (value) => `${value}px`);

    function onMouseMove(event: MouseEvent<HTMLElement>) {
        if (shouldReduceMotion) return;

        const { innerWidth, innerHeight } = window;
        rawX.set((event.clientX / innerWidth) * 20 - 10);
        rawY.set((event.clientY / innerHeight) * 20 - 10);
    }

    return (
        <header
            onMouseMove={onMouseMove}
            className="bg-brand-purple-950 relative flex min-h-screen items-center justify-center overflow-hidden text-white"
        >
            <motion.div
                className="absolute inset-0"
                style={{ x: translateX, y: translateY }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 1.2, ease: EASE }}
            >
                {hero.photoPath ? (
                    <img src={`/storage/${hero.photoPath}`} alt="" className="size-full object-cover opacity-50" />
                ) : (
                    <div className="bg-brand-purple-950 size-full" />
                )}
            </motion.div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 pt-20 text-center">
                <motion.p
                    className="mb-6 text-xs font-bold tracking-[0.2em] text-white/70 uppercase"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
                >
                    {t('home.hero.eyebrow')}
                </motion.p>

                <div className="overflow-hidden">
                    <motion.h1
                        className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                    >
                        {hero.heading ?? 'Isabella Figueroa Estrada'}
                    </motion.h1>
                </div>

                <div className="mt-6 overflow-hidden">
                    <motion.div
                        className="text-xl font-light tracking-tight text-white/80 md:text-3xl [&_p]:m-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                        dangerouslySetInnerHTML={{ __html: hero.subheading ?? '' }}
                    />
                </div>

                <motion.div
                    className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
                >
                    <Link href={r('contact.create')} className="group relative overflow-hidden rounded-full bg-white px-10 py-5 shadow-lg">
                        <span className="text-brand-purple-950 relative z-10 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-white">
                            {hero.ctaLabel ?? t('nav.cta')}
                        </span>
                        <span className="bg-brand-purple-950 absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </Link>
                    <Link
                        href={r('speaking.index')}
                        className="group relative overflow-hidden rounded-full border border-white/70 bg-white/10 px-10 py-5 backdrop-blur-sm"
                    >
                        <span className="relative z-10 text-xs font-bold tracking-[0.2em] text-white uppercase transition-colors duration-500 group-hover:text-white">
                            {t('home.speaking.cta')}
                        </span>
                        <span className="absolute inset-0 origin-left scale-x-0 bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: EASE }}
            >
                <div className="relative h-24 w-[2px] overflow-hidden rounded-full bg-white/20">
                    <motion.div
                        className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-white"
                        animate={shouldReduceMotion ? undefined : { y: ['-100%', '200%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                </div>
            </motion.div>
        </header>
    );
}
