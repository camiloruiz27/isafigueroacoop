<?php

namespace App\Filament\Resources\PressMentions\Pages;

use App\Filament\Resources\PressMentions\PressMentionResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditPressMention extends EditRecord
{
    protected static string $resource = PressMentionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
