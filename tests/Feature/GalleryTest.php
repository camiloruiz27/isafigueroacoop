<?php

namespace Tests\Feature;

use App\Models\GalleryPhoto;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GalleryTest extends TestCase
{
    use RefreshDatabase;

    public function test_only_featured_photos_are_listed_in_order()
    {
        GalleryPhoto::factory()->create(['is_featured' => false, 'order' => 0]);
        $second = GalleryPhoto::factory()->create(['is_featured' => true, 'order' => 2]);
        $first = GalleryPhoto::factory()->create(['is_featured' => true, 'order' => 1]);

        $this->get('/galeria')->assertInertia(fn ($page) => $page
            ->component('marketing/gallery')
            ->has('photos', 2)
            ->where('photos.0.id', $first->id)
            ->where('photos.1.id', $second->id));
    }

    public function test_the_homepage_includes_a_gallery_preview()
    {
        GalleryPhoto::factory()->count(3)->create(['is_featured' => true]);

        $this->get('/')->assertInertia(fn ($page) => $page->has('galleryPreview', 3));
    }
}
