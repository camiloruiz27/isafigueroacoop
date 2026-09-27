import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type PressMentionItem } from '@/types/marketing';

export function CredibilityBar({ pressMentions }: { pressMentions: PressMentionItem[] }) {
    const { t } = useTranslation();

    if (pressMentions.length === 0) return null;

    return (
        <ScrollReveal className="border-border border-y">
            <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 lg:px-10">
                <p className="text-muted-foreground mb-5 text-center text-xs font-semibold tracking-[0.2em] uppercase">
                    {t('home.credibility.label')}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                    {pressMentions.map((mention) =>
                        mention.logo_path ? (
                            <img
                                key={mention.id}
                                src={`/storage/${mention.logo_path}`}
                                alt={mention.outlet_name}
                                className="h-6 object-contain opacity-60 grayscale transition-opacity hover:opacity-100"
                            />
                        ) : (
                            <span key={mention.id} className="text-muted-foreground/70 font-serif text-lg italic">
                                {mention.outlet_name}
                            </span>
                        ),
                    )}
                </div>
            </div>
        </ScrollReveal>
    );
}
