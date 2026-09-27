import { cn } from '@/lib/utils';

interface SiteLogoProps {
    className?: string;
    inverted?: boolean;
}

export function SiteLogo({ className }: SiteLogoProps) {
    return <img src="/logo.png" alt="Isabella Figueroa" className={cn('h-10 w-auto object-contain', className)} />;
}
