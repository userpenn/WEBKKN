<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KegiatanController extends Controller
{
    public function index()
    {
        return Kegiatan::latest()->get();
    }

    public function byKategori(string $kategori)
    {
        return Kegiatan::where('kategori', $kategori)
            ->latest()
            ->get();
    }
}
