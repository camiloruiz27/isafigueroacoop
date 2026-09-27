<?php

namespace App\Filament\Resources\SpeakingTopics\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class SpeakingTopicForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Tabs::make('Contenido')->tabs([
                Tab::make('Español')->schema([
                    TextInput::make('title.es')
                        ->label('Título')
                        ->required()
                        ->live(onBlur: true)
                        ->afterStateUpdated(fn (string $state, Set $set) => $set('slug', Str::slug($state))),
                    Textarea::make('summary.es')
                        ->label('Resumen (para la tarjeta)')
                        ->rows(2)
                        ->required(),
                    Textarea::make('description.es')
                        ->label('Descripción completa')
                        ->rows(6)
                        ->required(),
                ]),
                Tab::make('English')->schema([
                    TextInput::make('title.en')->label('Title'),
                    Textarea::make('summary.en')->label('Card summary')->rows(2),
                    Textarea::make('description.en')->label('Full description')->rows(6),
                ]),
            ])->columnSpanFull(),

            TextInput::make('slug')->required()->unique(ignoreRecord: true),
            Select::make('icon')
                ->label('Ícono')
                ->options([
                    'megaphone' => 'Megáfono',
                    'users' => 'Personas',
                    'globe' => 'Globo',
                    'lightbulb' => 'Idea',
                    'trending-up' => 'Crecimiento',
                ])
                ->native(false),
            FileUpload::make('image_path')
                ->label('Imagen')
                ->image()
                ->disk('public')
                ->directory('speaking-topics'),
            Toggle::make('is_featured')
                ->label('Destacado en el sitio')
                ->default(true),
            TextInput::make('order')
                ->label('Orden')
                ->numeric()
                ->default(0),
        ]);
    }
}
