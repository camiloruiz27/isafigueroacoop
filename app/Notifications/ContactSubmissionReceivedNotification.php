<?php

namespace App\Notifications;

use App\Models\ContactSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactSubmissionReceivedNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(public ContactSubmission $submission) {}

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $isEnglish = $this->submission->locale === 'en';

        return (new MailMessage)
            ->subject($isEnglish ? 'We received your speaking request' : 'Recibimos tu solicitud de charla')
            ->greeting(($isEnglish ? 'Hi ' : 'Hola ').$this->submission->name.'!')
            ->line($isEnglish
                ? 'Thank you for reaching out to invite Isabella to speak at your event. She personally reviews every request and will get back to you shortly.'
                : 'Gracias por escribir para invitar a Isabella a participar en tu evento. Ella revisa personalmente cada solicitud y te responderá pronto.')
            ->line($isEnglish
                ? 'In the meantime, feel free to follow her work on social media.'
                : 'Mientras tanto, puedes seguir su trabajo en redes sociales.');
    }
}
