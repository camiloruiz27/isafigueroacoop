<?php

namespace App\Models;

use App\Models\Concerns\HasTranslations;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    use HasTranslations;

    /** @var array<int, string> */
    protected array $translatable = ['value'];

    protected $fillable = ['key', 'group', 'value', 'type'];

    protected function casts(): array
    {
        return [
            'value' => 'array',
        ];
    }

    protected static function booted(): void
    {
        static::saved(fn (self $setting) => Cache::forget("site_setting.{$setting->key}"));
    }

    public static function text(string $key, ?string $locale = null): ?string
    {
        $setting = Cache::rememberForever(
            "site_setting.{$key}",
            fn () => static::firstWhere('key', $key),
        );

        return $setting?->getTranslation('value', $locale);
    }
}
