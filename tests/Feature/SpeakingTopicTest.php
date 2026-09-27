<?php

namespace Tests\Feature;

use App\Models\SpeakingTopic;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SpeakingTopicTest extends TestCase
{
    use RefreshDatabase;

    public function test_only_featured_topics_are_listed_in_order()
    {
        SpeakingTopic::factory()->create(['is_featured' => false, 'order' => 0]);
        $second = SpeakingTopic::factory()->create(['is_featured' => true, 'order' => 2]);
        $first = SpeakingTopic::factory()->create(['is_featured' => true, 'order' => 1]);

        $this->get('/charlas')->assertInertia(fn ($page) => $page
            ->component('marketing/speaking/index')
            ->has('speakingTopics', 2)
            ->where('speakingTopics.0.slug', $first->slug)
            ->where('speakingTopics.1.slug', $second->slug));
    }

    public function test_a_topic_can_be_viewed_by_slug()
    {
        $topic = SpeakingTopic::factory()->create();

        $this->get("/charlas/{$topic->slug}")
            ->assertOk()
            ->assertInertia(fn ($page) => $page->component('marketing/speaking/show')->where('speakingTopic.slug', $topic->slug));
    }

    public function test_an_unknown_topic_slug_returns_not_found()
    {
        $this->get('/charlas/no-existe')->assertNotFound();
    }
}
