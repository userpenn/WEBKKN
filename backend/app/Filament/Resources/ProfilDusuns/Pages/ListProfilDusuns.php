<?php

namespace App\Filament\Resources\ProfilDusuns\Pages;

use App\Filament\Resources\ProfilDusuns\ProfilDusunResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListProfilDusuns extends ListRecords
{
    protected static string $resource = ProfilDusunResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
