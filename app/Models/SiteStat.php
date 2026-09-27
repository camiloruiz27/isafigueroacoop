<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiteStat extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['label'];

    protected $fillable = ['value', 'label', 'icon', 'order'];

    protected function casts(): array
    {
        return [
            'label' => 'array',
            'order' => 'integer',
        ];
    }

    public function scopeOrdered(Builder $query): Builder
    {
        return $query->orderBy('order');
    }
}
