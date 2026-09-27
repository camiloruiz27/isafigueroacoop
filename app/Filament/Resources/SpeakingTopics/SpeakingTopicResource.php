<?php

namespace App\Filament\Resources\SpeakingTopics;

use App\Filament\Resources\SpeakingTopics\Pages\CreateSpeakingTopic;
use App\Filament\Resources\SpeakingTopics\Pages\EditSpeakingTopic;
use App\Filament\Resources\SpeakingTopics\Pages\ListSpeakingTopics;
use App\Filament\Resources\SpeakingTopics\Schemas\SpeakingTopicForm;
use App\Filament\Resources\SpeakingTopics\Tables\SpeakingTopicsTable;
use App\Models\SpeakingTopic;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class SpeakingTopicResource extends Resource
{
    protected static ?string $model = SpeakingTopic::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedMegaphone;

    protected static ?string $navigationLabel = 'Temas de charla';

    protected static ?string $modelLabel = 'tema de charla';

    protected static ?string $pluralModelLabel = 'temas de charla';

    protected static string|\UnitEnum|null $navigationGroup = 'Contenido del sitio';

    public static function form(Schema $schema): Schema
    {
        return SpeakingTopicForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return SpeakingTopicsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSpeakingTopics::route('/'),
            'create' => CreateSpeakingTopic::route('/create'),
            'edit' => EditSpeakingTopic::route('/{record}/edit'),
        ];
    }
}
