<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LocaleTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_root_path_uses_spanish()
    {
        $this->get('/')->assertInertia(fn ($page) => $page->where('locale', 'es'));
    }

    public function test_the_en_prefixed_path_uses_english()
    {
        $this->get('/en')->assertInertia(fn ($page) => $page->where('locale', 'en'));
    }

    public function test_other_public_pages_respect_the_locale_prefix()
    {
        $this->get('/sobre-isabella')->assertInertia(fn ($page) => $page->where('locale', 'es'));
        $this->get('/en/sobre-isabella')->assertInertia(fn ($page) => $page->where('locale', 'en'));
    }
}
