<?php

namespace App\Filament\Resources\SiteStats\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class SiteStatForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('value')->label('Valor (ej. "+60")')->required(),

                Tabs::make('Contenido')->tabs([
                    Tab::make('Español')->schema([
                        TextInput::make('label.es')->label('Etiqueta')->required(),
                    ]),
                    Tab::make('English')->schema([
                        TextInput::make('label.en')->label('Label'),
                    ]),
                ])->columnSpanFull(),

                TextInput::make('icon')->label('Ícono'),
                TextInput::make('order')->label('Orden')->numeric()->default(0),
            ]);
    }
}
