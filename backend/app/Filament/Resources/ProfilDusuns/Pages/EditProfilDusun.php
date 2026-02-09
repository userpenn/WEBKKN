<?php

namespace App\Filament\Resources\ProfilDusuns\Pages;

use App\Filament\Resources\ProfilDusuns\ProfilDusunResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditProfilDusun extends EditRecord
{
    protected static string $resource = ProfilDusunResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
