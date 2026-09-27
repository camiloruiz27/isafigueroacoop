<?php

namespace App\Http\Controllers;

use App\Models\PressMention;
use Inertia\Inertia;
use Inertia\Response;

class PressController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('marketing/press', [
            'pressMentions' => PressMention::orderBy('order')->get()->map->toPublicArray(),
        ]);
    }
}
