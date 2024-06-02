<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MessageResource\Pages;
use App\Filament\Resources\MessageResource\RelationManagers;
use App\Models\Message;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MessageResource extends Resource
{
    protected static ?string $model = Message::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Tabs::make('Tabs')->tabs([
                    Forms\Components\Tabs\Tab::make('General Information')->schema([
                        Forms\Components\Textarea::make('content')
                            ->label('Content')
                            ->required()
                            ->rows(8)
                            ->maxLength(255),
                        Forms\Components\Select::make('user_id')
                            ->label('User')
                            ->relationship('user', 'name')
                            ->required(),
                        Forms\Components\Select::make('language')
                            ->label('Language')
                            ->options(['en' => 'English'])
                            ->default('en'),
                        Forms\Components\Select::make('status')
                            ->label('Status')
                            ->options(['new' => 'New', 'approved' => 'Approved', 'rejected' => 'Rejected'])
                            ->default('new'),
                        Forms\Components\TextInput::make('virality_score')
                            ->label('Virality Score')
                            ->type('number')
                            ->numeric()
                            ->minValue(0)
                            ->maxValue(100)
                            ->step(0.01)
                            ->default(0),
                        Forms\Components\TextInput::make('preferred_reader_age_lowest')
                            ->label('Preferred Reader Age Lowest')
                            ->type('number')
                            ->numeric()
                            ->minValue(0)
                            ->maxValue(100)
                            ->default(18),
                        Forms\Components\TextInput::make('preferred_reader_age_highest')
                            ->label('Preferred Reader Age Highest')
                            ->type('number')
                            ->numeric()
                            ->minValue(0)
                            ->maxValue(100)
                            ->default(80),
                    ]),
                    Forms\Components\Tabs\Tab::make('Content restrictions')->schema([
                        Forms\Components\Checkbox::make('explicit_content')
                            ->label('Explicit Content')
                            ->helperText('Like nudity'),
                        Forms\Components\Checkbox::make('graphic_content')
                            ->label('Graphic Content')
                            ->helperText('Like blood/violence/gore'),
                        Forms\Components\Checkbox::make('sensitive_content')
                            ->label('Sensitive Content')
                            ->helperText('Like mental health'),
                        Forms\Components\Checkbox::make('political_content')
                            ->label('Political Content')
                            ->helperText('Like political opinions'),
                        Forms\Components\Checkbox::make('religious_content')
                            ->label('Religious Content')
                            ->helperText('Like religious opinions'),
                        Forms\Components\Checkbox::make('sexual_content')
                            ->label('Sexual Content')
                            ->helperText('Like sexual content'),
                        Forms\Components\Checkbox::make('hate_speech')
                            ->label('Hate Speech')
                            ->helperText('Like racism'),
                        Forms\Components\Checkbox::make('harassment')
                            ->label('Harassment')
                            ->helperText('Like bullying'),
                        Forms\Components\Checkbox::make('spam')
                            ->label('Spam')
                            ->helperText('Like advertising'),
                        Forms\Components\Checkbox::make('fake_news')
                            ->label('Fake News')
                            ->helperText('Like misinformation'),
                    ])->columns(2)
                ]),
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('content')
                    ->searchable()
                    ->sortable()
                    ->wrap()
                    ->limit(50),

                Tables\Columns\TextColumn::make('language')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('content_restrictions')
                    ->getStateUsing(function (Message $message) {
                        // @todo this can be done better
                        return collect([
                            $message->explicit_content ? 'Explicit Content' : null,
                            $message->graphic_content ? 'Graphic Content' : null,
                            $message->sensitive_content ? 'Sensitive Content' : null,
                            $message->political_content ? 'Political Content' : null,
                            $message->religious_content ? 'Religious Content' : null,
                            $message->sexual_content ? 'Sexual Content' : null,
                            $message->hate_speech ? 'Hate Speech' : null,
                            $message->harassment ? 'Harassment' : null,
                            $message->spam ? 'Spam' : null,
                            $message->fake_news ? 'Fake News' : null,
                        ])->filter()->join(',');
                    })
                    ->badge()
                    ->separator(',')
                    ->limitList(2)
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageMessages::route('/'),
        ];
    }
}
