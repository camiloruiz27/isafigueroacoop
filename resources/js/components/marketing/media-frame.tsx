import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { cn } from '@/lib/utils';

interface MediaFrameProps {
    src?: string | null;
    alt: string;
    className?: string;
}

/**
 * Renders an uploaded image, or — until Isabella provides real photography —
 * a deliberate placeholder frame instead of a broken image or a stock icon.
 */
export function MediaFrame({ src, alt, className }: MediaFrameProps) {
    if (!src) {
        return (
            <div className={cn('border-border bg-muted relative overflow-hidden border', className)}>
                <PlaceholderPattern className="stroke-foreground/10 absolute inset-0 size-full" />
            </div>
        );
    }

    return (
        <div className={cn('border-border overflow-hidden border', className)}>
            <img src={`/storage/${src}`} alt={alt} className="size-full object-cover" />
        </div>
    );
}
