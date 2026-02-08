<?php

namespace App\Filament\Resources\KategoriKegiatans\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\TextInput;    

class KategoriKegiatanForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('nama')
                    ->label('Nama Kategori')
                    ->required()
                    ->maxLength(255),
            ]);
    }
}
