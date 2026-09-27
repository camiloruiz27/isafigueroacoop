import { MediaFrame } from '@/components/marketing/media-frame';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { type TestimonialItem } from '@/types/marketing';

export function TestimonialCarousel({ testimonials }: { testimonials: TestimonialItem[] }) {
    if (testimonials.length === 0) return null;

    return (
        <ScrollReveal>
            <Carousel opts={{ align: 'start', loop: testimonials.length > 1 }} className="w-full">
                <CarouselContent>
                    {testimonials.map((testimonial) => (
                        <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                            <figure className="border-border flex h-full flex-col gap-6 border p-8">
                                <blockquote className="font-serif text-xl leading-snug font-normal italic">“{testimonial.quote}”</blockquote>
                                <figcaption className="mt-auto flex items-center gap-3">
                                    <MediaFrame
                                        src={testimonial.author_photo_path}
                                        alt={testimonial.author_name}
                                        className="size-12 shrink-0 rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">{testimonial.author_name}</p>
                                        {testimonial.author_role && <p className="text-muted-foreground text-xs">{testimonial.author_role}</p>}
                                    </div>
                                </figcaption>
                            </figure>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {testimonials.length > 1 && (
                    <div className="mt-6 flex justify-end gap-2">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                )}
            </Carousel>
        </ScrollReveal>
    );
}
