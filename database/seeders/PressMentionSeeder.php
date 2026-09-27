<?php

namespace Database\Seeders;

use App\Models\PressMention;
use Illuminate\Database\Seeder;

class PressMentionSeeder extends Seeder
{
    public function run(): void
    {
        // TODO: reemplazar con menciones de prensa reales (logos y enlaces) que compartirá la usuaria.
        $mentions = [
            [
                'outlet_name' => 'Medio por confirmar',
                'title' => ['es' => 'Titular pendiente de reemplazo', 'en' => 'Headline pending replacement'],
                'url' => 'https://example.com',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'outlet_name' => 'Medio por confirmar',
                'title' => ['es' => 'Segundo titular pendiente', 'en' => 'Second headline pending'],
                'url' => 'https://example.com',
                'is_featured' => true,
                'order' => 2,
            ],
        ];

        foreach ($mentions as $mention) {
            PressMention::updateOrCreate(
                ['outlet_name' => $mention['outlet_name'], 'order' => $mention['order']],
                $mention,
            );
        }
    }
}
