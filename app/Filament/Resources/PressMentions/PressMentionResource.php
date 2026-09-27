<?php

namespace App\Filament\Resources\PressMentions;

use App\Filament\Resources\PressMentions\Pages\CreatePressMention;
use App\Filament\Resources\PressMentions\Pages\EditPressMention;
use App\Filament\Resources\PressMentions\Pages\ListPressMentions;
use App\Filament\Resources\PressMentions\Schemas\PressMentionForm;
use App\Filament\Resources\PressMentions\Tables\PressMentionsTable;
use App\Models\PressMention;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class PressMentionResource extends Resource
{
    protected static ?string $model = PressMention::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedGlobeAlt;

    protected static ?string $navigationLabel = 'Prensa';

    protected static ?string $modelLabel = 'mención de prensa';

    protected static ?string $pluralModelLabel = 'menciones de prensa';

    protected static string|\UnitEnum|null $navigationGroup = 'Contenido del sitio';

    public static function form(Schema $schema): Schema
    {
        return PressMentionForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return PressMentionsTable::configure($table);
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
            'index' => ListPressMentions::route('/'),
            'create' => CreatePressMention::route('/create'),
            'edit' => EditPressMention::route('/{record}/edit'),
        ];
    }
}
