import { StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { type GalleryPhotoItem } from '@/types/marketing';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function PhotoGalleryGrid({ photos }: { photos: GalleryPhotoItem[] }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const close = () => setActiveIndex(null);
    const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
    const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

    useEffect(() => {
        if (activeIndex === null) return;

        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'ArrowLeft') showPrev();
            if (event.key === 'ArrowRight') showNext();
        }

        window.addEventListener('keydown', onKeyDown);

        return () => window.removeEventListener('keydown', onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex]);

    if (photos.length === 0) return null;

    const active = activeIndex !== null ? photos[activeIndex] : null;

    return (
        <>
            <StaggerGroup className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
                {photos.map((photo, index) => (
                    <StaggerItem key={photo.id}>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className="group border-border block aspect-square w-full overflow-hidden border"
                        >
                            <img
                                src={`/storage/${photo.image_path}`}
                                alt={photo.caption ?? ''}
                                loading="lazy"
                                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </button>
                    </StaggerItem>
                ))}
            </StaggerGroup>

            <Dialog open={active !== null} onOpenChange={(open) => !open && close()}>
                <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                    <DialogTitle className="sr-only">{active?.caption ?? 'Foto'}</DialogTitle>
                    {active && (
                        <div className="relative">
                            <img src={`/storage/${active.image_path}`} alt={active.caption ?? ''} className="max-h-[80vh] w-full object-contain" />
                            {active.caption && <p className="mt-3 text-center text-sm text-white/90">{active.caption}</p>}
                            {photos.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={showPrev}
                                        aria-label="Anterior"
                                        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                    >
                                        <ChevronLeft className="size-5" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={showNext}
                                        aria-label="Siguiente"
                                        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                                    >
                                        <ChevronRight className="size-5" />
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
