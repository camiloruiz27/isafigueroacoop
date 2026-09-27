<?php

namespace App\Filament\Resources\SpeakingTopics\Pages;

use App\Filament\Resources\SpeakingTopics\SpeakingTopicResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditSpeakingTopic extends EditRecord
{
    protected static string $resource = SpeakingTopicResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
