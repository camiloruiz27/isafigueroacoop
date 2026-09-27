<?php

namespace Database\Factories;

use App\Enums\ContactSubmissionStatus;
use App\Models\ContactSubmission;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ContactSubmission>
 */
class ContactSubmissionFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'organization' => $this->faker->company(),
            'event_type' => 'Conferencia',
            'event_date' => now()->addMonth()->toDateString(),
            'topic' => null,
            'message' => $this->faker->paragraph(),
            'locale' => 'es',
            'status' => ContactSubmissionStatus::New,
            'admin_notes' => null,
            'ip_address' => $this->faker->ipv4(),
            'user_agent' => $this->faker->userAgent(),
        ];
    }
}
