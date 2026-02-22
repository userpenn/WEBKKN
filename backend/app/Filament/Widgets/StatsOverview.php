<?php

namespace App\Filament\Widgets;

use App\Models\Berita;
use App\Models\Kegiatan;
use App\Models\KategoriKegiatan;
use App\Models\ProfilDusun;

use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Berita', Berita::count())
                ->description('Jumlah berita yang dipublikasikan')
                ->color('success'),

            Stat::make('Total Kegiatan', Kegiatan::count())
                ->description('Jumlah kegiatan')
                ->color('primary'),

            Stat::make('Total Kategori', KategoriKegiatan::count())
                ->description('Kategori kegiatan')
                ->color('warning'),

            Stat::make('Profil Dusun', ProfilDusun::count())
                ->description('Data profil dusun')
                ->color('info'),
        ];
    }
}
