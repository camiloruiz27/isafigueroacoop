<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BlogCategory extends Model
{
    use HasFactory;
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['name'];

    protected $fillable = ['name', 'slug'];

    protected function casts(): array
    {
        return [
            'name' => 'array',
        ];
    }

    public function posts(): HasMany
    {
        return $this->hasMany(BlogPost::class);
    }
}
