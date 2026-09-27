import { BlogCategoryFilter } from '@/components/marketing/blog-category-filter';
import { BlogPostCard } from '@/components/marketing/blog-post-card';
import { ScrollReveal, StaggerGroup, StaggerItem } from '@/components/marketing/scroll-reveal';
import MarketingLayout from '@/layouts/marketing-layout';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type BlogCategoryItem, type BlogPostSummary, type Paginated } from '@/types/marketing';
import { Head, Link } from '@inertiajs/react';

interface BlogIndexProps {
    posts: Paginated<BlogPostSummary>;
    categories: BlogCategoryItem[];
    activeCategory: string;
}

export default function BlogIndex({ posts, categories, activeCategory }: BlogIndexProps) {
    const { t } = useTranslation();

    return (
        <MarketingLayout>
            <Head title={t('blog.heading')} />

            <section className="mx-auto max-w-[1400px] px-4 pt-16 pb-24 sm:px-6 lg:px-10">
                <ScrollReveal className="max-w-2xl">
                    <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{t('blog.eyebrow')}</p>
                    <h1 className="mt-3 font-serif text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl">{t('blog.heading')}</h1>
                </ScrollReveal>

                {categories.length > 0 && (
                    <div className="mt-10">
                        <BlogCategoryFilter categories={categories} activeCategory={activeCategory} />
                    </div>
                )}

                {posts.data.length === 0 ? (
                    <p className="text-muted-foreground mt-14">{t('blog.empty')}</p>
                ) : (
                    <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.data.map((post) => (
                            <StaggerItem key={post.id}>
                                <BlogPostCard post={post} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                )}

                {posts.last_page > 1 && (
                    <nav className="mt-14 flex flex-wrap justify-center gap-2">
                        {posts.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url ?? '#'}
                                preserveScroll
                                className={`min-w-9 rounded-md px-3 py-2 text-center text-sm ${
                                    link.active ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'
                                } ${!link.url ? 'pointer-events-none opacity-40' : ''}`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </nav>
                )}
            </section>
        </MarketingLayout>
    );
}
