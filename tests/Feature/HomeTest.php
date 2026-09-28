<?php

namespace Tests\Feature;

use App\Models\SiteSetting;
use App\Models\SiteStat;
use App\Models\SpeakingTopic;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HomeTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_homepage_renders_with_the_expected_props()
    {
        SiteStat::factory()->create(['value' => '+60', 'label' => ['es' => 'Publicaciones', 'en' => 'Publications']]);
        SpeakingTopic::factory()->create(['is_featured' => true]);

        $this->get('/')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('marketing/home')
                ->has('hero')
                ->has('bio')
                ->has('tedx')
                ->has('stats', 1)
                ->has('speakingTopics', 1)
                ->has('testimonials')
                ->has('pressMentions')
                ->has('latestPosts'));
    }

    public function test_non_translatable_settings_like_the_hero_photo_are_exposed_as_is()
    {
        // hero.photo_path is stored as a bare string (Filament's FileUpload output), not a
        // {es, en} object, since it isn't translatable — it must round-trip unchanged.
        SiteSetting::create(['key' => 'hero.photo_path', 'group' => 'hero', 'type' => 'image', 'value' => 'site/hero-photo.jpg']);

        $this->get('/')
            ->assertInertia(fn ($page) => $page->where('hero.photoPath', 'site/hero-photo.jpg'));
    }
}
