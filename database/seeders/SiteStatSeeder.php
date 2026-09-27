<?php

namespace Database\Seeders;

use App\Models\SiteStat;
use Illuminate\Database\Seeder;

class SiteStatSeeder extends Seeder
{
    public function run(): void
    {
        $stats = [
            ['value' => '+60', 'label' => ['es' => 'Publicaciones en medios', 'en' => 'Media publications'], 'icon' => 'newspaper', 'order' => 1],
            ['value' => '+100', 'label' => ['es' => 'Eventos y actividades cooperativas', 'en' => 'Cooperative events and activities'], 'icon' => 'users', 'order' => 2],
            ['value' => '+10.000', 'label' => ['es' => 'Personas inspiradas', 'en' => 'People inspired'], 'icon' => 'trending-up', 'order' => 3],
        ];

        foreach ($stats as $stat) {
            SiteStat::updateOrCreate(['value' => $stat['value'], 'order' => $stat['order']], $stat);
        }
    }
}
