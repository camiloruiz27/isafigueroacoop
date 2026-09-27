<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        // TODO: reemplazar con testimonios reales de organizadores de eventos que compartirá la usuaria.
        $testimonials = [
            [
                'author_name' => 'Organizador de evento cooperativo',
                'author_role' => ['es' => 'Por confirmar', 'en' => 'To be confirmed'],
                'quote' => [
                    'es' => 'Espacio reservado para un testimonio real sobre una charla de Isabella.',
                    'en' => 'Placeholder for a real testimonial about one of Isabella\'s talks.',
                ],
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'author_name' => 'Organizador de evento cooperativo',
                'author_role' => ['es' => 'Por confirmar', 'en' => 'To be confirmed'],
                'quote' => [
                    'es' => 'Espacio reservado para un segundo testimonio real.',
                    'en' => 'Placeholder for a second real testimonial.',
                ],
                'is_featured' => true,
                'order' => 2,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::updateOrCreate(
                ['author_name' => $testimonial['author_name'], 'order' => $testimonial['order']],
                $testimonial,
            );
        }
    }
}
