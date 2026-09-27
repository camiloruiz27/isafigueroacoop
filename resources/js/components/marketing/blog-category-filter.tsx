import { useTranslation } from '@/lib/i18n/i18n-context';
import { cn } from '@/lib/utils';
import { type BlogCategoryItem } from '@/types/marketing';
import { Link } from '@inertiajs/react';

interface BlogCategoryFilterProps {
    categories: BlogCategoryItem[];
    activeCategory: string;
}

export function BlogCategoryFilter({ categories, activeCategory }: BlogCategoryFilterProps) {
    const { t, r } = useTranslation();

    return (
        <div className="border-border flex flex-wrap gap-x-6 gap-y-2 border-b pb-4">
            <Link
                href={r('blog.index')}
                className={cn(
                    'pb-2 text-sm font-medium transition-colors',
                    activeCategory === '' ? 'border-primary text-primary border-b-2' : 'text-muted-foreground hover:text-foreground',
                )}
            >
                {t('blog.allCategories')}
            </Link>
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={r('blog.index', { category: category.slug })}
                    className={cn(
                        'pb-2 text-sm font-medium transition-colors',
                        activeCategory === category.slug ? 'border-primary text-primary border-b-2' : 'text-muted-foreground hover:text-foreground',
                    )}
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
}
