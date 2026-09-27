<?php

namespace App\Filament\Resources\GalleryPhotos\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;

class GalleryPhotoForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                FileUpload::make('image_path')
                    ->label('Foto')
                    ->image()
                    ->required()
                    ->disk('public')
                    ->directory('gallery')
                    ->imageEditor(),
                TextInput::make('caption.es')->label('Descripción (Español)'),
                TextInput::make('caption.en')->label('Description (English)'),
                Toggle::make('is_featured')->label('Mostrar en el sitio')->default(true),
                TextInput::make('order')->label('Orden')->numeric()->default(0),
            ]);
    }
}
