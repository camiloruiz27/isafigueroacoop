<?php

namespace Database\Factories;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(6);

        return [
            'blog_category_id' => BlogCategory::factory(),
            'title' => ['es' => $title, 'en' => $title],
            'excerpt' => ['es' => $this->faker->sentence(), 'en' => $this->faker->sentence()],
            'body' => ['es' => '<p>'.$this->faker->paragraph().'</p>', 'en' => '<p>'.$this->faker->paragraph().'</p>'],
            'cover_image_path' => null,
            'slug' => Str::slug($title).'-'.Str::random(4),
            'is_published' => true,
            'published_at' => now()->subDay(),
            'created_by' => null,
        ];
    }
}
