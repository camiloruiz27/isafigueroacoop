<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['author_role', 'quote'];

    protected $fillable = [
        'author_name',
        'author_role',
        'quote',
        'author_photo_path',
        'source_url',
        'is_featured',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'author_role' => 'array',
            'quote' => 'array',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ];
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true)->orderBy('order');
    }
}
