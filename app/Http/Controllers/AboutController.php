<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('marketing/about', [
            'bio' => [
                'heading' => SiteSetting::text('bio.heading'),
                'body' => SiteSetting::text('bio.body'),
                'photoPath' => SiteSetting::text('bio.photo_path'),
                'collaboratorName' => SiteSetting::text('bio.collaborator_name'),
                'collaboratorRole' => SiteSetting::text('bio.collaborator_role'),
            ],
        ]);
    }
}
