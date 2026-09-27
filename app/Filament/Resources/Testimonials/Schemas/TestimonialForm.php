<?php

namespace App\Filament\Resources\Testimonials\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class TestimonialForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('author_name')->label('Nombre del autor')->required(),

                Tabs::make('Contenido')->tabs([
                    Tab::make('Español')->schema([
                        TextInput::make('author_role.es')->label('Cargo / organización'),
                        Textarea::make('quote.es')->label('Testimonio')->rows(4)->required(),
                    ]),
                    Tab::make('English')->schema([
                        TextInput::make('author_role.en')->label('Role / organization'),
                        Textarea::make('quote.en')->label('Testimonial')->rows(4),
                    ]),
                ])->columnSpanFull(),

                FileUpload::make('author_photo_path')
                    ->label('Foto del autor')
                    ->image()
                    ->disk('public')
                    ->directory('testimonials'),
                TextInput::make('source_url')->label('Enlace de origen')->url(),
                Toggle::make('is_featured')->label('Destacado')->default(true),
                TextInput::make('order')->label('Orden')->numeric()->default(0),
            ]);
    }
}
