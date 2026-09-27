<?php

namespace App\Filament\Resources\PressMentions\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class PressMentionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('outlet_name')->label('Medio')->required(),

                Tabs::make('Contenido')->tabs([
                    Tab::make('Español')->schema([
                        TextInput::make('title.es')->label('Titular')->required(),
                    ]),
                    Tab::make('English')->schema([
                        TextInput::make('title.en')->label('Headline'),
                    ]),
                ])->columnSpanFull(),

                TextInput::make('url')->label('Enlace')->url()->required(),
                FileUpload::make('logo_path')
                    ->label('Logo del medio')
                    ->image()
                    ->disk('public')
                    ->directory('press'),
                DatePicker::make('published_at')->label('Fecha de publicación'),
                Toggle::make('is_featured')->label('Destacado')->default(true),
                TextInput::make('order')->label('Orden')->numeric()->default(0),
            ]);
    }
}
