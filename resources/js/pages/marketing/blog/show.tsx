import { MediaFrame } from '@/components/marketing/media-frame';
import { ScrollReveal } from '@/components/marketing/scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type BlogPostDetail } from '@/types/marketing';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function BlogShow({ post }: { post: BlogPostDetail }) {
    const { t, r, locale } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={post.title} />

            <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-10">
                <Link
                    href={r('blog.index')}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium"
                >
                    <ArrowLeft className="size-4" />
                    {t('blog.backToBlog')}
                </Link>

                <ScrollReveal className="mt-8">
                    {post.category && <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">{post.category.name}</p>}
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-balance md:text-5xl">{post.title}</h1>
                    {post.published_at && (
                        <p className="text-muted-foreground mt-4 text-sm">
                            {new Date(post.published_at).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-CO', { dateStyle: 'long' })}
                        </p>
                    )}
                </ScrollReveal>

                <ScrollReveal delay={0.1} className="mt-10">
                    <MediaFrame src={post.cover_image_path} alt={post.title} className="aspect-16/9 w-full" />
                </ScrollReveal>

                <ScrollReveal delay={0.15} className="mt-10">
                    <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.body }} />
                </ScrollReveal>
            </article>
        </MarketingLayout>
    );
}
