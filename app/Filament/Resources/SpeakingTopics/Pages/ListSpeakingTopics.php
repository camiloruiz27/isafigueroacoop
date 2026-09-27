<?php

namespace App\Filament\Resources\SpeakingTopics\Pages;

use App\Filament\Resources\SpeakingTopics\SpeakingTopicResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListSpeakingTopics extends ListRecords
{
    protected static string $resource = SpeakingTopicResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
