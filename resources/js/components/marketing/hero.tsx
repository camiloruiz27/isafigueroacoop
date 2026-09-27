import { MediaFrame } from '@/components/marketing/media-frame';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type HeroContent } from '@/types/marketing';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export function Hero({ hero }: { hero: HeroContent }) {
    const { t, r } = useTranslation();

    return (
        <section className="mx-auto max-w-[1400px] px-4 pt-14 pb-20 sm:px-6 lg:px-10 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-12">
                <motion.div
                    className="lg:col-span-7"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="text-primary mb-5 text-xs font-semibold tracking-[0.2em] uppercase">{t('home.hero.eyebrow')}</p>
                    <h1 className="font-serif text-5xl leading-[1.05] font-medium text-balance sm:text-6xl md:text-7xl">
                        {hero.heading ?? 'Isabella Figueroa Estrada'}
                    </h1>
                    <p className="text-muted-foreground mt-6 max-w-xl text-lg md:text-xl">{hero.subheading}</p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button asChild size="xl">
                            <Link href={r('contact.create')}>{hero.ctaLabel ?? t('nav.cta')}</Link>
                        </Button>
                        <Button asChild size="xl" variant="outline">
                            <Link href={r('speaking.index')}>{t('home.speaking.cta')}</Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    className="lg:col-span-5"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                    <MediaFrame src={hero.photoPath} alt={hero.heading ?? ''} className="aspect-4/5 w-full" />
                </motion.div>
            </div>
        </section>
    );
}
