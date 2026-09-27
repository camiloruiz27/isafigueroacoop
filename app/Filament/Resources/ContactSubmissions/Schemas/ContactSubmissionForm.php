<?php

namespace App\Filament\Resources\ContactSubmissions\Schemas;

use App\Enums\ContactSubmissionStatus;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ContactSubmissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')->label('Nombre')->disabled(),
                TextInput::make('email')->label('Correo')->email()->disabled(),
                TextInput::make('phone')->label('Teléfono')->tel()->disabled(),
                TextInput::make('organization')->label('Organización')->disabled(),
                TextInput::make('event_type')->label('Tipo de evento')->disabled(),
                DatePicker::make('event_date')->label('Fecha del evento')->disabled(),
                TextInput::make('topic')->label('Tema de interés')->disabled(),
                Textarea::make('message')->label('Mensaje')->rows(4)->columnSpanFull()->disabled(),

                Select::make('status')
                    ->label('Estado')
                    ->options(ContactSubmissionStatus::class)
                    ->required(),
                Textarea::make('admin_notes')
                    ->label('Notas internas')
                    ->rows(3)
                    ->columnSpanFull(),
            ]);
    }
}
