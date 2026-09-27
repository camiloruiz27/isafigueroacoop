<?php

namespace Tests\Feature;

use App\Enums\ContactSubmissionStatus;
use App\Models\ContactSubmission;
use App\Models\User;
use App\Notifications\ContactSubmissionReceivedNotification;
use App\Notifications\NewContactSubmissionNotification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Notification;
use Tests\TestCase;

class ContactSubmissionTest extends TestCase
{
    use RefreshDatabase;

    public function test_valid_submission_is_stored_and_notifies_admins_and_sender()
    {
        Notification::fake();

        $admin = User::factory()->create(['is_admin' => true]);

        $response = $this->post('/contacto', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'message' => 'Me encantaría invitar a Isabella a nuestro congreso.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHas('success', true);

        $this->assertDatabaseHas('contact_submissions', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'status' => ContactSubmissionStatus::New->value,
            'locale' => 'es',
        ]);

        Notification::assertSentTo($admin, NewContactSubmissionNotification::class);
        Notification::assertSentOnDemand(ContactSubmissionReceivedNotification::class);
    }

    public function test_submission_requires_name_email_and_message()
    {
        $response = $this->post('/contacto', []);

        $response->assertSessionHasErrors(['name', 'email', 'message']);
        $this->assertDatabaseCount('contact_submissions', 0);
    }

    public function test_submission_rejects_an_invalid_email()
    {
        $response = $this->post('/contacto', [
            'name' => 'Jane Doe',
            'email' => 'not-an-email',
            'message' => 'Hola',
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_english_submission_is_stored_with_the_english_locale()
    {
        Notification::fake();

        $this->post('/en/contacto', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'message' => 'I would like to invite Isabella to speak.',
        ]);

        $this->assertDatabaseHas('contact_submissions', [
            'email' => 'john@example.com',
            'locale' => 'en',
        ]);
    }

    public function test_admin_can_see_the_submission_in_the_panel()
    {
        $admin = User::factory()->create(['is_admin' => true]);
        $submission = ContactSubmission::factory()->create(['name' => 'Panel Test']);

        $this->actingAs($admin)
            ->get('/admin/contact-submissions')
            ->assertOk()
            ->assertSee('Panel Test');
    }
}
