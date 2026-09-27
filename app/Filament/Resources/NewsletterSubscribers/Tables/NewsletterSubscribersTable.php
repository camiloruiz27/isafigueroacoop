<?php

namespace App\Filament\Resources\NewsletterSubscribers\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class NewsletterSubscribersTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('subscribed_at', 'desc')
            ->columns([
                TextColumn::make('email')->label('Correo')->searchable(),
                TextColumn::make('name')->label('Nombre')->searchable(),
                TextColumn::make('locale')->label('Idioma'),
                TextColumn::make('source')->label('Origen'),
                TextColumn::make('subscribed_at')->label('Suscrito el')->dateTime()->sortable(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                //
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
