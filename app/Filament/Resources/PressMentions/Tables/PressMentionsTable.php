<?php

namespace App\Filament\Resources\PressMentions\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PressMentionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('order')
            ->columns([
                ImageColumn::make('logo_path')->label(''),
                TextColumn::make('outlet_name')->label('Medio')->searchable(),
                TextColumn::make('title.es')->label('Titular'),
                TextColumn::make('published_at')->label('Fecha')->date()->sortable(),
                IconColumn::make('is_featured')->label('Destacado')->boolean(),
                TextColumn::make('order')->label('Orden')->numeric()->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
