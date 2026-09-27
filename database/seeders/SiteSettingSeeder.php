<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = collect(config('site_settings'))->keyBy('key');

        $values = [
            'hero.heading' => [
                'es' => 'El cooperativismo también es joven',
                'en' => 'Cooperativism is young too',
            ],
            'hero.subheading' => [
                'es' => 'Isabella Figueroa Estrada es abogada, delegada más joven en la historia de Coomeva y voz de una nueva generación de líderes cooperativos. Lleva su experiencia a escenarios, medios y organizaciones que quieren construir el futuro del cooperativismo.',
                'en' => 'Isabella Figueroa Estrada is a lawyer, the youngest delegate in Coomeva\'s history, and a voice for a new generation of cooperative leaders. She brings her experience to stages, media and organizations building the future of cooperativism.',
            ],
            'hero.cta_label' => [
                'es' => 'Invitar a Isabella a mi evento',
                'en' => 'Invite Isabella to my event',
            ],
            'hero.photo_path' => null,

            'bio.heading' => [
                'es' => 'Sobre Isabella',
                'en' => 'About Isabella',
            ],
            'bio.body' => [
                'es' => 'Isabella Figueroa Estrada es Abogada y Administradora de Empresas con énfasis en Negocios Internacionales. Es la Delegada más joven que ha tenido Coomeva en su historia y forma parte del Comité Regional de Juventud de la Alianza Cooperativa Internacional (ACI) para América. Desde ahí impulsa la participación de nuevas generaciones en el movimiento cooperativo, combinando su formación jurídica con una visión moderna de liderazgo, comunicación e innovación social.',
                'en' => 'Isabella Figueroa Estrada is a lawyer and business administrator specialized in international business. She is the youngest delegate in Coomeva\'s history and a member of the Regional Youth Committee of the International Cooperative Alliance (ICA) for the Americas. From there she drives youth participation in the cooperative movement, combining her legal background with a modern vision of leadership, communication and social innovation.',
            ],
            'bio.photo_path' => null,
            'bio.collaborator_name' => 'Viviana Estrada Ochoa',
            'bio.collaborator_role' => [
                'es' => 'Comunicadora Social y Periodista',
                'en' => 'Social Communicator and Journalist',
            ],

            'tedx.heading' => [
                'es' => 'Camino al TEDx',
                'en' => 'The Road to TEDx',
            ],
            'tedx.body' => [
                'es' => 'Isabella se está preparando para llevar su mensaje sobre juventud y cooperativismo a un escenario TEDx. Cada charla, publicación y espacio de medios es un paso más en ese camino. Si crees en esta causa, puedes ayudarla a llegar ahí invitándola a hablar en tu organización o compartiendo su historia.',
                'en' => 'Isabella is preparing to bring her message about youth and cooperativism to a TEDx stage. Every talk, publication and media appearance is another step on that path. If you believe in this cause, you can help her get there by inviting her to speak at your organization or sharing her story.',
            ],

            'social.facebook_url' => 'https://www.facebook.com/isabelladelegadacoop',
            'social.twitter_url' => 'https://twitter.com/isabelladelegadacoop',
            'social.instagram_url' => 'https://www.instagram.com/isabelladelegadacoop/',
            'social.youtube_url' => 'https://www.youtube.com/@IsaFigueroaE',

            'seo.default_title' => [
                'es' => 'Isabella Figueroa · Voz joven del cooperativismo',
                'en' => 'Isabella Figueroa · A Young Voice for Cooperativism',
            ],
            'seo.default_description' => [
                'es' => 'Conferencista y líder cooperativa. Invita a Isabella Figueroa a compartir su experiencia sobre juventud, liderazgo e innovación en el movimiento cooperativo.',
                'en' => 'Speaker and cooperative leader. Invite Isabella Figueroa to share her experience on youth, leadership and innovation in the cooperative movement.',
            ],

            // TODO: reemplazar con el texto legal completo migrado del WordPress (isafigueroacoop.com).
            'legal.privacy_policy' => [
                'es' => '<p>Política de tratamiento de datos personales — contenido pendiente de migrar desde el sitio anterior.</p>',
                'en' => '<p>Privacy policy — content pending migration from the previous site.</p>',
            ],
            'legal.terms' => [
                'es' => '<p>Términos y condiciones — contenido pendiente de migrar desde el sitio anterior.</p>',
                'en' => '<p>Terms and conditions — content pending migration from the previous site.</p>',
            ],
        ];

        foreach ($values as $key => $value) {
            $definition = $catalog->get($key);

            SiteSetting::updateOrCreate(
                ['key' => $key],
                [
                    'group' => $definition['group'],
                    'type' => $definition['type'],
                    'value' => $value,
                ],
            );
        }
    }
}
