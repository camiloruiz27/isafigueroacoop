<?php

namespace App\Http\Controllers;

use App\Models\SpeakingTopic;
use Inertia\Inertia;
use Inertia\Response;

class SpeakingTopicController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('marketing/speaking/index', [
            'speakingTopics' => SpeakingTopic::where('is_featured', true)
                ->orderBy('order')
                ->get()
                ->map->toPublicArray(),
        ]);
    }

    public function show(SpeakingTopic $speakingTopic): Response
    {
        return Inertia::render('marketing/speaking/show', [
            'speakingTopic' => $speakingTopic->toPublicArray(),
        ]);
    }
}
