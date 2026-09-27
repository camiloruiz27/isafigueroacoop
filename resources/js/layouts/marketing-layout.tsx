import { SiteFooter } from '@/components/marketing/site-footer';
import { SiteHeader } from '@/components/marketing/site-header';
import { Toaster } from '@/components/ui/sonner';
import { usePage } from '@inertiajs/react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { type ReactNode } from 'react';

export default function MarketingLayout({ children }: { children: ReactNode }) {
    const { url } = usePage();

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-background text-foreground flex min-h-screen flex-col">
                <SiteHeader />
                <AnimatePresence mode="wait" initial={false}>
                    <motion.main
                        key={url}
                        className="flex-1"
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
