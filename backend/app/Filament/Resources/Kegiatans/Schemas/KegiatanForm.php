<?php

namespace App\Filament\Resources\Kegiatans\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\DatePicker;

class KegiatanForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Select::make('kategori_id') // pakai id kategori sebagai value
                    ->label('Kategori')
                    ->options(fn() => \App\Models\KategoriKegiatan::all()->pluck('nama', 'id'))
                    ->searchable() // bisa cari kategori
                    ->required(),

                TextInput::make('judul')->required(),

                Textarea::make('deskripsi')->required(),

                FileUpload::make('foto')
                    ->image()
                    ->disk('public')
                    ->directory('kegiatan')
                    ->visibility('public')
                    ->required(),

                TextInput::make('embed_link')
                    ->label('Embed Link (Optional)')
                ,

                DatePicker::make('tanggal')->required()

            ]);
    }
}
