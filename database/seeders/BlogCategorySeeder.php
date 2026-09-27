<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Seeder;

class BlogCategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => ['es' => 'Cooperativismo', 'en' => 'Cooperativism'], 'slug' => 'cooperativismo'],
            ['name' => ['es' => 'Liderazgo Joven', 'en' => 'Young Leadership'], 'slug' => 'liderazgo-joven'],
        ];

        foreach ($categories as $category) {
            BlogCategory::updateOrCreate(['slug' => $category['slug']], $category);
        }
    }
}
