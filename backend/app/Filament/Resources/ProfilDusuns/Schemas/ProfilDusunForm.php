<?php

namespace App\Filament\Resources\ProfilDusuns\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;
use Filament\Forms\Components\FileUpload;

class ProfilDusunForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->schema([
            TextInput::make('nama_dusun')
                ->required()
                ->maxLength(255),

            Textarea::make('deskripsi')
                ->rows(3),

            Textarea::make('sejarah')
                ->rows(4),

            Textarea::make('visi')
                ->rows(3),

            Textarea::make('misi')
                ->rows(4),

            FileUpload::make('foto')
                ->image()
                ->directory('profil')
                ->disk('public'),
                ]);
    }
}
