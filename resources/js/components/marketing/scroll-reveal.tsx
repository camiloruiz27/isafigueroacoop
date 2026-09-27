import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ElementType, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    as?: ElementType;
    className?: string;
}

export function ScrollReveal({ children, delay = 0, as = 'div', className }: ScrollRevealProps) {
    const MotionComponent = motion.create(as);

    return (
        <MotionComponent
            className={cn(className)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </MotionComponent>
    );
}

interface StaggerGroupProps {
    children: ReactNode;
    className?: string;
}

export function StaggerGroup({ children, className }: StaggerGroupProps) {
    return (
        <motion.div
            className={cn(className)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className }: StaggerGroupProps) {
    return (
        <motion.div
            className={cn(className)}
            variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
            }}
        >
            {children}
        </motion.div>
    );
}
