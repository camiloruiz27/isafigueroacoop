<?php

namespace App\Filament\Resources\ContactSubmissions\Tables;

use App\Enums\ContactSubmissionStatus;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class ContactSubmissionsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->defaultSort('created_at', 'desc')
            ->columns([
                TextColumn::make('created_at')->label('Recibido')->dateTime()->sortable(),
                TextColumn::make('name')->label('Nombre')->searchable(),
                TextColumn::make('email')->label('Correo')->searchable(),
                TextColumn::make('organization')->label('Organización')->searchable(),
                TextColumn::make('event_type')->label('Tipo de evento'),
                TextColumn::make('event_date')->label('Fecha del evento')->date()->sortable(),
                TextColumn::make('status')
                    ->label('Estado')
                    ->badge()
                    ->formatStateUsing(fn (ContactSubmissionStatus $state) => $state->label())
                    ->color(fn (ContactSubmissionStatus $state) => $state->color()),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->label('Estado')
                    ->options(ContactSubmissionStatus::class),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                //
            ]);
    }
}
