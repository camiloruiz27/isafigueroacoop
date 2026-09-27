import { PhotoGalleryGrid } from '@/components/marketing/photo-gallery-grid';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type GalleryPhotoItem } from '@/types/marketing';
import { Head } from '@inertiajs/react';

export default function Gallery({ photos }: { photos: GalleryPhotoItem[] }) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('gallery.heading')} />

            <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-24 sm:px-6 lg:px-10">
                <ScrollReveal className="max-w-2xl">
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('gallery.eyebrow')}</p>
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">
                        {t('gallery.heading')}
                    </h1>
                    <p className="text-muted-foreground mt-5 text-lg">{t('gallery.intro')}</p>
                </ScrollReveal>

                <div className="mt-12">
                    {photos.length === 0 ? <p className="text-muted-foreground">{t('gallery.empty')}</p> : <PhotoGalleryGrid photos={photos} />}
                </div>
            </section>
        </MarketingLayout>
    );
}
