import { useTranslation } from '@/lib/i18n/i18n-context';
import { type PressMentionItem } from '@/types/marketing';
import { ArrowUpRight } from 'lucide-react';

export function PressMentionCard({ mention }: { mention: PressMentionItem }) {
    const { t, locale } = useTranslation();

    return (
        <a
            href={mention.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group border-border hover:border-primary flex flex-col justify-between border p-6 transition-colors"
        >
            <div>
                <p className="text-muted-foreground text-xs font-bold tracking-[0.15em] uppercase">{mention.outlet_name}</p>
                <h3 className="mt-3 font-serif text-lg leading-snug font-bold tracking-tight">{mention.title}</h3>
            </div>
            <div className="text-muted-foreground mt-6 flex items-center justify-between text-sm">
                {mention.published_at && (
                    <span>{new Date(mention.published_at).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-CO', { dateStyle: 'medium' })}</span>
                )}
                <span className="text-primary ml-auto inline-flex items-center gap-1 font-medium">
                    {t('press.readMore')}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </a>
    );
}
