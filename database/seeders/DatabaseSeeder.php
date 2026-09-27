<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AdminUserSeeder::class,
            SiteSettingSeeder::class,
            SiteStatSeeder::class,
            SpeakingTopicSeeder::class,
            TestimonialSeeder::class,
            PressMentionSeeder::class,
            BlogCategorySeeder::class,
            BlogPostSeeder::class,
        ]);
    }
}
