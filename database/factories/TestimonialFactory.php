<?php

namespace Database\Factories;

use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author_name' => $this->faker->name(),
            'author_role' => ['es' => $this->faker->jobTitle(), 'en' => $this->faker->jobTitle()],
            'quote' => ['es' => $this->faker->paragraph(), 'en' => $this->faker->paragraph()],
            'author_photo_path' => null,
            'source_url' => null,
            'is_featured' => true,
            'order' => 0,
        ];
    }
}
