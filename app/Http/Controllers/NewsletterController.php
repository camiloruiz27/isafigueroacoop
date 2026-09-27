<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreNewsletterSubscriberRequest;
use App\Models\NewsletterSubscriber;
use Illuminate\Http\RedirectResponse;

class NewsletterController extends Controller
{
    public function store(StoreNewsletterSubscriberRequest $request): RedirectResponse
    {
        NewsletterSubscriber::updateOrCreate(
            ['email' => $request->validated('email')],
            [
                'name' => $request->validated('name'),
                'locale' => app()->getLocale(),
                'source' => $request->validated('source'),
                'subscribed_at' => now(),
                'unsubscribed_at' => null,
            ],
        );

        return back()->with('success', true);
    }
}
