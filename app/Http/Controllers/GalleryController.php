<?php

namespace App\Http\Controllers;

use App\Models\GalleryPhoto;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('marketing/gallery', [
            'photos' => GalleryPhoto::featured()->get()->map->toPublicArray(),
        ]);
    }
}
