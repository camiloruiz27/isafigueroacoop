<?php

namespace App\Models\Concerns;

trait HasTranslations
{
    public function getTranslation(string $attribute, ?string $locale = null): ?string
    {
        $value = $this->getAttribute($attribute);

        // Non-translatable values (image paths, URLs, plain text) are stored as a
        // bare scalar rather than a {es, en} object — return them as-is instead of
        // indexing into them, which would silently resolve to null.
        if (! is_array($value)) {
            return $value;
        }

        $locale ??= app()->getLocale();

        return $value[$locale] ?? $value[config('app.fallback_locale')] ?? null;
    }

    /**
     * Flattens the model's translatable attributes to the active locale, for Inertia props.
     *
     * @return array<string, mixed>
     */
    public function toPublicArray(?string $locale = null): array
    {
        $data = $this->toArray();

        foreach ($this->translatable ?? [] as $attribute) {
            $data[$attribute] = $this->getTranslation($attribute, $locale);
        }

        return $data;
    }
}
