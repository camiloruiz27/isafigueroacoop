<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use Inertia\Inertia;
use Inertia\Response;

class LegalController extends Controller
{
    public function privacy(): Response
    {
        return Inertia::render('marketing/legal/privacy', [
            'body' => SiteSetting::text('legal.privacy_policy'),
        ]);
    }

    public function terms(): Response
    {
        return Inertia::render('marketing/legal/terms', [
            'body' => SiteSetting::text('legal.terms'),
        ]);
    }
}
