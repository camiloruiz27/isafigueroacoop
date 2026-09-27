<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\PressMention;
use App\Models\SiteSetting;
use App\Models\SiteStat;
use App\Models\SpeakingTopic;
use App\Models\Testimonial;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('marketing/home', [
            'hero' => [
                'heading' => SiteSetting::text('hero.heading'),
                'subheading' => SiteSetting::text('hero.subheading'),
                'ctaLabel' => SiteSetting::text('hero.cta_label'),
                'photoPath' => SiteSetting::text('hero.photo_path'),
            ],
            'bio' => [
                'heading' => SiteSetting::text('bio.heading'),
                'body' => SiteSetting::text('bio.body'),
                'photoPath' => SiteSetting::text('bio.photo_path'),
                'collaboratorName' => SiteSetting::text('bio.collaborator_name'),
                'collaboratorRole' => SiteSetting::text('bio.collaborator_role'),
            ],
            'tedx' => [
                'heading' => SiteSetting::text('tedx.heading'),
                'body' => SiteSetting::text('tedx.body'),
            ],
            'stats' => SiteStat::ordered()->get()->map->toPublicArray(),
            'speakingTopics' => SpeakingTopic::featured()->limit(3)->get()->map->toPublicArray(),
            'testimonials' => Testimonial::featured()->get()->map->toPublicArray(),
            'pressMentions' => PressMention::featured()->limit(6)->get()->map->toPublicArray(),
            'latestPosts' => BlogPost::published()->with('category')->latest('published_at')->limit(3)->get()->map->toPublicArrayWithCategory(),
        ]);
    }
}
