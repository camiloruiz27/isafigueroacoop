<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PressMention extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['title'];

    protected $fillable = [
        'outlet_name',
        'title',
        'url',
        'logo_path',
        'published_at',
        'is_featured',
        'order',
    ];

    protected function casts(): array
    {
        return [
            'title' => 'array',
            'published_at' => 'date',
            'is_featured' => 'boolean',
            'order' => 'integer',
        ];
    }

    public function scopeFeatured(Builder $query): Builder
    {
        return $query->where('is_featured', true)->orderBy('order');
    }
}
