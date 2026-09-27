import { StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import { StatCounter } from '@/components/marketing/stat-counter';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SiteStatItem } from '@/types/marketing';

export function StatsSection({ stats }: { stats: SiteStatItem[] }) {
    const { t } = useTranslation();

    if (stats.length === 0) return null;

    return (
        <section className="border-border bg-muted/40 border-y">
            <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
                <p className="text-primary mb-8 text-xs font-semibold tracking-[0.2em] uppercase">{t('home.stats.eyebrow')}</p>
                <StaggerGroup className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                    {stats.map((stat) => (
                        <StaggerItem key={stat.id}>
                            <StatCounter value={stat.value} label={stat.label} />
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
}
