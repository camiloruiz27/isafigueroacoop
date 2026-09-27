<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpeakingTopic extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['title', 'summary', 'description'];

    protected $fillable = [
        'title',
        'summary',
        'description',
        'icon',
        'image_path',
        'slug',
        'is_featured',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'title' => 'array',
            'summary' => 'array',
            'description' => 'array',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ];
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true)->orderBy('order');
    }
}
