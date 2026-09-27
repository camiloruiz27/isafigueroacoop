export interface SiteStatItem {
    id: number;
    value: string;
    label: string;
    icon: string | null;
    order: number;
}

export interface SpeakingTopicItem {
    id: number;
    title: string;
    summary: string;
    description: string;
    icon: string | null;
    image_path: string | null;
    slug: string;
    is_featured: boolean;
    order: number;
}

export interface TestimonialItem {
    id: number;
    author_name: string;
    author_role: string | null;
    quote: string;
    author_photo_path: string | null;
    source_url: string | null;
    is_featured: boolean;
    order: number;
}

export interface PressMentionItem {
    id: number;
    outlet_name: string;
    title: string;
    url: string;
    logo_path: string | null;
    published_at: string | null;
    is_featured: boolean;
    order: number;
}

export interface GalleryPhotoItem {
    id: number;
    image_path: string;
    caption: string | null;
    order: number;
}

export interface BlogCategoryItem {
    id: number;
    name: string;
    slug: string;
}

export interface BlogPostSummary {
    id: number;
    title: string;
    excerpt: string | null;
    cover_image_path: string | null;
    slug: string;
    published_at: string | null;
    category: { name: string; slug: string } | null;
}

export interface BlogPostDetail extends BlogPostSummary {
    body: string;
}

export interface HeroContent {
    heading: string | null;
    subheading: string | null;
    ctaLabel: string | null;
    photoPath: string | null;
}

export interface BioContent {
    heading: string | null;
    body: string | null;
    photoPath: string | null;
    collaboratorName: string | null;
    collaboratorRole: string | null;
}

export interface TedxContent {
    heading: string | null;
    body: string | null;
}

export interface Paginated<T> {
    data: T[];
    links: { url: string | null; label: string; active: boolean }[];
    current_page: number;
    last_page: number;
}
