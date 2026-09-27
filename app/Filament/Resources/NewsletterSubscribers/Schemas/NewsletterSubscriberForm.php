<?php

namespace App\Filament\Resources\NewsletterSubscribers\Schemas;

use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class NewsletterSubscriberForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('email')->label('Correo')->email()->disabled(),
                TextInput::make('name')->label('Nombre')->disabled(),
                TextInput::make('locale')->label('Idioma')->disabled(),
                TextInput::make('source')->label('Origen')->disabled(),
                DateTimePicker::make('subscribed_at')->label('Suscrito el')->disabled(),
                DateTimePicker::make('unsubscribed_at')->label('Desuscrito el')->disabled(),
            ]);
    }
}
