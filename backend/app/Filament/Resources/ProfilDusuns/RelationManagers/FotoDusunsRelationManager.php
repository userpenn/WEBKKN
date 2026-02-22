<?php

namespace App\Filament\Resources\ProfilDusuns\RelationManagers;

use Filament\Actions\CreateAction;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

class FotoDusunsRelationManager extends RelationManager
{
    protected static string $relationship = 'fotoDusuns';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->schema([
                TextInput::make('judul')
                    ->required(),

                FileUpload::make('foto')
                    ->image()
                    ->disk('public')
                    ->directory('foto-dusun')
                    ->visibility('public')
                    ->required(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('judul')
                    ->searchable(),

                ImageColumn::make('foto')
                    ->getStateUsing(fn ($record) => asset('storage/' . $record->foto))
                    ->height(80),
            ])
            ->headerActions([
                CreateAction::make(),
            ])
            ->actions([
                EditAction::make(),
                DeleteAction::make(),
            ]);
    }
}