<?php

namespace Database\Factories;

use App\Models\SiteStat;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SiteStat>
 */
class SiteStatFactory extends Factory
{
    /**
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'value' => '+'.$this->faker->numberBetween(10, 100),
            'label' => ['es' => $this->faker->words(3, true), 'en' => $this->faker->words(3, true)],
            'icon' => 'trending-up',
            'order' => 0,
        ];
    }
}
