import { MediaFrame } from '@/components/marketing/media-frame';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type BlogPostSummary } from '@/types/marketing';
import { Link } from '@inertiajs/react';

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
    const { t, r, locale } = useTranslation();

    return (
        <Link href={r('blog.show', { blogPost: post.slug })} className="group flex flex-col">
            <MediaFrame
                src={post.cover_image_path}
                alt={post.title}
                className="aspect-16/10 w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="mt-4">
                {post.category && <p className="text-primary text-xs font-semibold tracking-[0.15em] uppercase">{post.category.name}</p>}
                <h3 className="mt-2 font-serif text-xl leading-snug font-medium">{post.title}</h3>
                {post.excerpt && <p className="text-muted-foreground mt-2 text-sm">{post.excerpt}</p>}
                <div className="text-muted-foreground mt-3 flex items-center justify-between text-xs">
                    {post.published_at && (
                        <span>{new Date(post.published_at).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-CO', { dateStyle: 'medium' })}</span>
                    )}
                    <span className="text-primary font-medium">{t('blog.readMore')}</span>
                </div>
            </div>
        </Link>
    );
}
