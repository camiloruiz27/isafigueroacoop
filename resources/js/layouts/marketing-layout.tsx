import { SiteFooter } from '@/components/marketing/site-footer';
import { SiteHeader } from '@/components/marketing/site-header';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { type ReactNode } from 'react';

interface MarketingLayoutProps {
    children: ReactNode;
    /** Home-style hero pages render their own full-bleed image under a transparent-to-solid header. */
    transparentHeader?: boolean;
}

export default function MarketingLayout({ children, transparentHeader = false }: MarketingLayoutProps) {
    const { url } = usePage();

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-background text-foreground flex min-h-screen flex-col">
                <SiteHeader transparent={transparentHeader} />
                <AnimatePresence mode="wait" initial={false}>
                    <motion.main
                        key={url}
                        className={cn('flex-1', !transparentHeader && 'pt-[calc(73px+env(safe-area-inset-top))]')}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.18 }}
                    >
                        {children}
                    </motion.main>
                </AnimatePresence>
                <SiteFooter />
                <Toaster />
            </div>
        </MotionConfig>
    );
}
