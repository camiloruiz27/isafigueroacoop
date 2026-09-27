import { ScrollReveal } from '@/components/marketing/scroll-reveal';

export interface TimelineMilestone {
    year: string;
    title: string;
    description: string;
}

export function Timeline({ milestones }: { milestones: TimelineMilestone[] }) {
    return (
        <ol className="border-border space-y-10 border-l pl-8">
            {milestones.map((milestone, index) => (
                <ScrollReveal as="li" key={milestone.year + milestone.title} delay={index * 0.05} className="relative">
                    <span className="bg-primary absolute top-1.5 -left-[2.28rem] size-3 rounded-full" />
                    <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">{milestone.year}</p>
                    <h3 className="mt-2 font-serif text-lg font-bold tracking-tight">{milestone.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{milestone.description}</p>
                </ScrollReveal>
            ))}
        </ol>
    );
}
