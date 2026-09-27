<?php

namespace App\Notifications;

use App\Mail\NewSpeakingRequestMail;
use App\Models\ContactSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Notification;

class NewContactSubmissionNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(public ContactSubmission $submission) {}

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail(object $notifiable): Mailable
    {
        return new NewSpeakingRequestMail($this->submission);
    }

    /**
     * @return array<string, mixed>
     */
    public function toDatabase(object $notifiable): array
    {
        return [
            'contact_submission_id' => $this->submission->id,
            'name' => $this->submission->name,
            'email' => $this->submission->email,
            'event_type' => $this->submission->event_type,
        ];
    }
}
