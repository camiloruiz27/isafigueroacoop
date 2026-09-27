<?php

namespace App\Models\Concerns;

trait HasTranslations
{
    public function getTranslation(string $attribute, ?string $locale = null): ?string
    {
        $locale ??= app()->getLocale();
        $value = $this->getAttribute($attribute) ?? [];

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
