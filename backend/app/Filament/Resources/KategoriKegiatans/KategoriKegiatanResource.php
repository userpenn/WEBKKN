<?php

namespace App\Filament\Resources\KategoriKegiatans;

use App\Filament\Resources\KategoriKegiatans\Pages\CreateKategoriKegiatan;
use App\Filament\Resources\KategoriKegiatans\Pages\EditKategoriKegiatan;
use App\Filament\Resources\KategoriKegiatans\Pages\ListKategoriKegiatans;
use App\Filament\Resources\KategoriKegiatans\Schemas\KategoriKegiatanForm;
use App\Filament\Resources\KategoriKegiatans\Tables\KategoriKegiatansTable;
use App\Models\KategoriKegiatan;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class KategoriKegiatanResource extends Resource
{
    protected static ?string $model = KategoriKegiatan::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'nama';

    public static function form(Schema $schema): Schema
    {
        return KategoriKegiatanForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return KategoriKegiatansTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListKategoriKegiatans::route('/'),
            'create' => CreateKategoriKegiatan::route('/create'),
            'edit' => EditKategoriKegiatan::route('/{record}/edit'),
        ];
    }
}
