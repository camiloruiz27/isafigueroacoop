<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogPost extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['title', 'excerpt', 'body'];

    protected $fillable = [
        'blog_category_id',
        'title',
        'excerpt',
        'body',
        'cover_image_path',
        'slug',
        'is_published',
        'published_at',
        'created_by',
    ];

    protected function casts(): array
    {
        return [
            'title' => 'array',
            'excerpt' => 'array',
            'body' => 'array',
            'is_published' => 'boolean',
            'published_at' => 'datetime',
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true)->where('published_at', '<=', now());
    }

    /**
     * Like toPublicArray(), but also flattens the loaded category relation
     * to a localized {name, slug} pair instead of its raw translatable array.
     *
     * @return array<string, mixed>
     */
    public function toPublicArrayWithCategory(?string $locale = null): array
    {
        return [
            ...$this->toPublicArray($locale),
            'category' => $this->category ? [
                'name' => $this->category->getTranslation('name', $locale),
                'slug' => $this->category->slug,
            ] : null,
        ];
    }
}
