<?php

namespace App\Filament\Pages;

use App\Models\SiteSetting;
use BackedEnum;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Filament\Schemas\Components\Component;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Illuminate\Support\Arr;

class ManageSiteContent extends Page
{
    protected string $view = 'filament.pages.manage-site-content';

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static ?string $navigationLabel = 'Contenido del sitio';

    protected static string|\UnitEnum|null $navigationGroup = 'Contenido del sitio';

    protected static ?string $title = 'Editar contenido del sitio';

    /** @var array<string, mixed> */
    public ?array $data = [];

    /** @var array<string, string> */
    private const GROUP_LABELS = [
        'hero' => 'Portada',
        'bio' => 'Biografía',
        'tedx' => 'Camino al TEDx',
        'social' => 'Redes sociales',
        'seo' => 'SEO',
        'legal' => 'Legal',
    ];

    public function mount(): void
    {
        $values = SiteSetting::pluck('value', 'key');

        $state = [];

        foreach (config('site_settings') as $setting) {
            Arr::set($state, $setting['key'], $values[$setting['key']] ?? null);
        }

        $this->form->fill($state);
    }

    public function form(Schema $schema): Schema
    {
        $groups = collect(config('site_settings'))->groupBy('group');

        return $schema
            ->components([
                Tabs::make('Grupos')
                    ->tabs(
                        $groups->map(fn ($settings, $group) => Tab::make(self::GROUP_LABELS[$group] ?? $group)
                            ->schema($settings->flatMap(fn (array $setting) => $this->makeFields($setting))->all()))
                            ->values()
                            ->all(),
                    )
                    ->columnSpanFull(),
            ])
            ->statePath('data');
    }

    /**
     * @param  array{key: string, group: string, type: string, translatable: bool}  $setting
     * @return array<int, Component>
     */
    private function makeFields(array $setting): array
    {
        $label = (string) str($setting['key'])->afterLast('.')->replace('_', ' ')->headline();

        if ($setting['type'] === 'image') {
            return [
                FileUpload::make($setting['key'])
                    ->label($label)
                    ->image()
                    ->disk('public')
                    ->directory('site'),
            ];
        }

        if (! $setting['translatable']) {
            $field = TextInput::make($setting['key'])->label($label);

            return [$setting['type'] === 'url' ? $field->url() : $field];
        }

        $fieldClass = $setting['type'] === 'richtext' ? RichEditor::class : TextInput::class;

        return [
            Grid::make(2)->schema([
                $fieldClass::make("{$setting['key']}.es")->label("{$label} (Español)"),
                $fieldClass::make("{$setting['key']}.en")->label("{$label} (English)"),
            ]),
        ];
    }

    public function save(): void
    {
        $state = $this->form->getState();

        foreach (config('site_settings') as $setting) {
            SiteSetting::updateOrCreate(
                ['key' => $setting['key']],
                [
                    'group' => $setting['group'],
                    'type' => $setting['type'],
                    'value' => data_get($state, $setting['key']),
                ],
            );
        }

        Notification::make()
            ->title('Contenido guardado correctamente')
            ->success()
            ->send();
    }
}
