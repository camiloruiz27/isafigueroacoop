<?php

namespace App\Filament\Resources\GalleryPhotos\Pages;

use App\Filament\Resources\GalleryPhotos\GalleryPhotoResource;
use App\Models\GalleryPhoto;
use Filament\Actions\Action;
use Filament\Actions\CreateAction;
use Filament\Forms\Components\FileUpload;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ListRecords;

class ListGalleryPhotos extends ListRecords
{
    protected static string $resource = GalleryPhotoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('bulkUpload')
                ->label('Subir varias fotos')
                ->icon('heroicon-o-arrow-up-tray')
                ->schema([
                    FileUpload::make('photos')
                        ->label('Fotos')
                        ->image()
                        ->multiple()
                        ->required()
                        ->disk('public')
                        ->directory('gallery')
                        ->helperText('Puedes seleccionar varias fotos a la vez. Luego edita cada una para agregarle una descripción si quieres.'),
                ])
                ->action(function (array $data): void {
                    $nextOrder = (int) (GalleryPhoto::max('order') ?? 0) + 1;

                    foreach ($data['photos'] as $path) {
                        GalleryPhoto::create([
                            'image_path' => $path,
                            'is_featured' => true,
                            'order' => $nextOrder++,
                        ]);
                    }

                    Notification::make()
                        ->title(count($data['photos']).' fotos subidas correctamente')
                        ->success()
                        ->send();
                }),
            CreateAction::make(),
        ];
    }
}
