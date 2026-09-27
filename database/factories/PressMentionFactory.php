<?php

namespace Database\Factories;

use App\Models\PressMention;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<PressMention>
 */
class PressMentionFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence();

        return [
            'outlet_name' => $this->faker->company(),
            'title' => ['es' => $title, 'en' => $title],
            'url' => $this->faker->url(),
            'logo_path' => null,
            'published_at' => now()->subWeek(),
            'is_featured' => true,
            'order' => 0,
        ];
    }
}
