import { MediaFrame } from '@/components/marketing/media-frame';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SpeakingTopicItem } from '@/types/marketing';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

export function SpeakingTopicCard({ topic }: { topic: SpeakingTopicItem }) {
    const { t, r } = useTranslation();

    return (
        <article className="group border-border flex flex-col border">
            <div className="overflow-hidden">
                <MediaFrame
                    src={topic.image_path}
                    alt={topic.title}
                    className="aspect-16/10 w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-medium">{topic.title}</h3>
                <p className="text-muted-foreground mt-2 flex-1 text-sm">{topic.summary}</p>
                <Link
                    href={r('contact.create', { topic: topic.title })}
                    className="text-primary hover:text-brand-purple-800 mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                >
                    {t('home.speaking.requestCta')}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </div>
        </article>
    );
}
