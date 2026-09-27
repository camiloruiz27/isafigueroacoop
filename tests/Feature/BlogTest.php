<?php

namespace Tests\Feature;

use App\Models\BlogPost;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class BlogTest extends TestCase
{
    use RefreshDatabase;

    public function test_published_posts_are_listed()
    {
        $post = BlogPost::factory()->create(['is_published' => true, 'published_at' => now()->subDay()]);

        $this->get('/blog')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('marketing/blog/index')
                ->has('posts.data', 1)
                ->where('posts.data.0.slug', $post->slug));
    }

    public function test_unpublished_posts_are_not_listed_or_accessible()
    {
        $draft = BlogPost::factory()->create(['is_published' => false]);

        $this->get('/blog')->assertInertia(fn ($page) => $page->has('posts.data', 0));

        $this->get("/blog/{$draft->slug}")->assertNotFound();
    }

    public function test_future_scheduled_posts_are_not_listed()
    {
        BlogPost::factory()->create(['is_published' => true, 'published_at' => now()->addWeek()]);

        $this->get('/blog')->assertInertia(fn ($page) => $page->has('posts.data', 0));
    }

    public function test_a_published_post_can_be_viewed()
    {
        $post = BlogPost::factory()->create(['is_published' => true, 'published_at' => now()->subDay()]);

        $this->get("/blog/{$post->slug}")
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('marketing/blog/show')->where('post.slug', $post->slug));
    }
}
