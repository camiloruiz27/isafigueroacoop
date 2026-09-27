<?php

namespace App\Filament\Resources\BlogPosts\Schemas;

use App\Models\BlogCategory;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class BlogPostForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Tabs::make('Contenido')->tabs([
                    Tab::make('Español')->schema([
                        TextInput::make('title.es')
                            ->label('Título')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $state, Set $set) => $set('slug', Str::slug($state))),
                        Textarea::make('excerpt.es')->label('Extracto')->rows(2),
                        RichEditor::make('body.es')->label('Contenido')->required(),
                    ]),
                    Tab::make('English')->schema([
                        TextInput::make('title.en')->label('Title'),
                        Textarea::make('excerpt.en')->label('Excerpt')->rows(2),
                        RichEditor::make('body.en')->label('Content'),
                    ]),
                ])->columnSpanFull(),

                Select::make('blog_category_id')
                    ->label('Categoría')
                    ->options(fn () => BlogCategory::all()->mapWithKeys(fn (BlogCategory $c) => [$c->id => $c->getTranslation('name', 'es')]))
                    ->native(false),
                FileUpload::make('cover_image_path')
                    ->label('Imagen de portada')
                    ->image()
                    ->disk('public')
                    ->directory('blog'),
                TextInput::make('slug')->required()->unique(ignoreRecord: true),
                Toggle::make('is_published')->label('Publicado'),
                DateTimePicker::make('published_at')->label('Fecha de publicación'),
            ]);
    }
}
