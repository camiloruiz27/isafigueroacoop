<?php

namespace Database\Factories;

use App\Models\SpeakingTopic;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<SpeakingTopic>
 */
class SpeakingTopicFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(5);

        return [
            'title' => ['es' => $title, 'en' => $title],
            'summary' => ['es' => $this->faker->sentence(), 'en' => $this->faker->sentence()],
            'description' => ['es' => $this->faker->paragraph(), 'en' => $this->faker->paragraph()],
            'icon' => 'megaphone',
            'image_path' => null,
            'slug' => Str::slug($title).'-'.Str::random(4),
            'is_featured' => true,
            'order' => 0,
        ];
    }
}
