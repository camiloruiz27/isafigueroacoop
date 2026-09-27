<?php

namespace Database\Seeders;

use App\Models\SpeakingTopic;
use Illuminate\Database\Seeder;

class SpeakingTopicSeeder extends Seeder
{
    public function run(): void
    {
        $topics = [
            [
                'title' => ['es' => 'El futuro del cooperativismo está en la juventud', 'en' => 'The Future of Cooperativism Is Young'],
                'summary' => [
                    'es' => 'Cómo vincular a nuevas generaciones a la gobernanza y la vida cooperativa.',
                    'en' => 'How to bring new generations into cooperative governance and life.',
                ],
                'description' => [
                    'es' => 'A partir de su experiencia como la Delegada más joven en la historia de Coomeva, Isabella comparte estrategias concretas para que las cooperativas atraigan, formen y den espacio real de decisión a líderes jóvenes.',
                    'en' => 'Drawing on her experience as the youngest delegate in Coomeva\'s history, Isabella shares concrete strategies for cooperatives to attract, train and give real decision-making power to young leaders.',
                ],
                'icon' => 'users',
                'slug' => 'futuro-cooperativismo-joven',
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => ['es' => 'Liderazgo joven en organizaciones tradicionales', 'en' => 'Young Leadership in Traditional Organizations'],
                'summary' => [
                    'es' => 'Cómo ejercer influencia real dentro de estructuras consolidadas sin perder legitimidad.',
                    'en' => 'How to exercise real influence inside established structures without losing legitimacy.',
                ],
                'description' => [
                    'es' => 'Una charla honesta sobre los retos de liderar siendo joven en espacios con reglas y jerarquías ya establecidas, y las herramientas prácticas que permiten ganar credibilidad y generar cambio desde adentro.',
                    'en' => 'An honest talk about the challenges of leading as a young person in spaces with established rules and hierarchies, and the practical tools that build credibility and drive change from within.',
                ],
                'icon' => 'trending-up',
                'slug' => 'liderazgo-joven-organizaciones-tradicionales',
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => ['es' => 'Cooperativismo con mirada global: aprendizajes desde la ACI', 'en' => 'Cooperativism with a Global Lens: Lessons from the ICA'],
                'summary' => [
                    'es' => 'Perspectivas internacionales para fortalecer el movimiento cooperativo local.',
                    'en' => 'International perspectives to strengthen the local cooperative movement.',
                ],
                'description' => [
                    'es' => 'Isabella comparte su experiencia en el Comité Regional de Juventud de la Alianza Cooperativa Internacional (ACI) para conectar los retos locales del cooperativismo con tendencias y aprendizajes globales.',
                    'en' => 'Isabella shares her experience on the Regional Youth Committee of the International Cooperative Alliance (ICA) to connect local cooperative challenges with global trends and lessons.',
                ],
                'icon' => 'globe',
                'slug' => 'cooperativismo-mirada-global-aci',
                'is_featured' => true,
                'order' => 3,
            ],
        ];

        foreach ($topics as $topic) {
            SpeakingTopic::updateOrCreate(['slug' => $topic['slug']], $topic);
        }
    }
}
