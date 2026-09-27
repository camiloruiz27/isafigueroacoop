<?php

namespace Tests\Feature;

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
}
