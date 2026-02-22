<?php

namespace App\Filament\Resources\ProfilDusuns;

use App\Filament\Resources\ProfilDusuns\Pages\CreateProfilDusun;
use App\Filament\Resources\ProfilDusuns\Pages\EditProfilDusun;
use App\Filament\Resources\ProfilDusuns\Pages\ListProfilDusuns;
use App\Filament\Resources\ProfilDusuns\Schemas\ProfilDusunForm;
use App\Filament\Resources\ProfilDusuns\Tables\ProfilDusunsTable;
use App\Models\ProfilDusun;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class ProfilDusunResource extends Resource
{
    protected static ?string $model = ProfilDusun::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static ?string $recordTitleAttribute = 'nama_dusun';

    // public static function canCreate(): bool
    // {
    //     return \App\Models\ProfilDusun::count() === 0;
    // }

    public static function form(Schema $schema): Schema
    {
        return ProfilDusunForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return ProfilDusunsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\FotoDusunsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListProfilDusuns::route('/'),
            'create' => CreateProfilDusun::route('/create'),
            'edit' => EditProfilDusun::route('/{record}/edit'),
        ];
    }


}
