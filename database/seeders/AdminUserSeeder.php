<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'isabellafe9@gmail.com'],
            [
                'name' => 'Isabella Figueroa',
                'password' => bcrypt(env('ISAFIGUECOOP_PASSWORD')),
                'is_admin' => true,
                'email_verified_at' => now(),
            ],
        );
    }
}
