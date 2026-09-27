<?php

namespace App\Http\Controllers;

use App\Enums\ContactSubmissionStatus;
use App\Http\Requests\StoreContactSubmissionRequest;
use App\Models\ContactSubmission;
use App\Models\SpeakingTopic;
use App\Models\User;
use App\Notifications\ContactSubmissionReceivedNotification;
use App\Notifications\NewContactSubmissionNotification;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function create(Request $request): Response
    {
        return Inertia::render('marketing/contact', [
            'speakingTopics' => SpeakingTopic::where('is_featured', true)
                ->orderBy('order')
                ->get()
                ->map->toPublicArray(),
            'defaultTopic' => $request->query('topic'),
        ]);
    }

    public function store(StoreContactSubmissionRequest $request): RedirectResponse
    {
        $submission = ContactSubmission::create([
            ...$request->validated(),
            'locale' => app()->getLocale(),
            'status' => ContactSubmissionStatus::New,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        Notification::send(
            User::where('is_admin', true)->get(),
            new NewContactSubmissionNotification($submission),
        );

        Notification::route('mail', $submission->email)
            ->notify((new ContactSubmissionReceivedNotification($submission))->locale($submission->locale));

        return back()->with('success', true);
    }
}
