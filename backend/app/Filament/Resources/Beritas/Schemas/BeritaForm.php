<?php

namespace App\Filament\Resources\Beritas\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\FileUpload;
use Illuminate\Support\Str;

class BeritaForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('judul')->required(),
                // TextInput::make('slug')
                //     ->disabled()
                //     ->dehydrated()
                //     ->default(fn($get) => Str::slug($get('judul'))),

                TextInput::make('slug')
                    ->required()
                    ->unique(ignoreRecord: true),

                FileUpload::make('thumbnail')
                    ->image()
                    ->directory('berita')
                    ->required(),

                Textarea::make('konten')
                    ->label('Isi Berita')
                    ->required()
                    ->rows(6),

                TextInput::make('embed_link')
                    ->label('Embed Link (Optional)')
                    ->placeholder('Masukkan link embed video dari YouTube atau platform lainnya'),

            ]);

    }
}
