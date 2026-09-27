<?php

namespace Database\Factories;

use App\Models\GalleryPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<GalleryPhoto>
 */
class GalleryPhotoFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'image_path' => 'gallery/'.$this->faker->uuid().'.jpg',
            'caption' => ['es' => $this->faker->sentence(4), 'en' => $this->faker->sentence(4)],
            'is_featured' => true,
            'order' => 0,
        ];
    }
}
