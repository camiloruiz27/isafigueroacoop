<?php

namespace App\Filament\Resources\PressMentions\Pages;

use App\Filament\Resources\PressMentions\PressMentionResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListPressMentions extends ListRecords
{
    protected static string $resource = PressMentionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
