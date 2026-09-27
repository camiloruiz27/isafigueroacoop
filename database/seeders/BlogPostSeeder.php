<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Models\User;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        $author = User::where('is_admin', true)->first();
        $cooperativismo = BlogCategory::where('slug', 'cooperativismo')->first();
        $liderazgo = BlogCategory::where('slug', 'liderazgo-joven')->first();

        $posts = [
            [
                'blog_category_id' => $cooperativismo?->id,
                'title' => ['es' => 'Por qué la juventud es el futuro del cooperativismo', 'en' => 'Why Youth Is the Future of Cooperativism'],
                'excerpt' => [
                    'es' => 'Tres razones para que las cooperativas inviertan hoy en liderazgo joven.',
                    'en' => 'Three reasons cooperatives should invest in young leadership today.',
                ],
                'body' => [
                    'es' => '<p>Contenido de ejemplo. Reemplazar con un artículo real.</p>',
                    'en' => '<p>Sample content. Replace with a real article.</p>',
                ],
                'slug' => 'juventud-futuro-cooperativismo',
                'is_published' => true,
                'published_at' => now()->subDays(14),
                'created_by' => $author?->id,
            ],
            [
                'blog_category_id' => $liderazgo?->id,
                'title' => ['es' => 'Cinco aprendizajes de ser la delegada más joven de Coomeva', 'en' => 'Five Lessons from Being Coomeva\'s Youngest Delegate'],
                'excerpt' => [
                    'es' => 'Reflexiones sobre liderar en espacios donde nadie esperaba verte.',
                    'en' => 'Reflections on leading in spaces no one expected to see you in.',
                ],
                'body' => [
                    'es' => '<p>Contenido de ejemplo. Reemplazar con un artículo real.</p>',
                    'en' => '<p>Sample content. Replace with a real article.</p>',
                ],
                'slug' => 'aprendizajes-delegada-mas-joven-coomeva',
                'is_published' => true,
                'published_at' => now()->subDays(5),
                'created_by' => $author?->id,
            ],
        ];

        foreach ($posts as $post) {
            BlogPost::updateOrCreate(['slug' => $post['slug']], $post);
        }
    }
}
