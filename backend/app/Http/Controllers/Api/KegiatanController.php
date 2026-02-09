<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kegiatan;
use App\Models\KategoriKegiatan;

class KegiatanController extends Controller
{
    public function index()
    {
        return Kegiatan::with('kategori')
            ->orderBy('tanggal', 'desc')
            ->get();
    }

    public function byKategori($kategori)
    {
        // validasi kategori ada atau tidak
        KategoriKegiatan::findOrFail($kategori);

        return Kegiatan::with('kategori')
            ->where('kategori_id', $kategori)
            ->orderBy('tanggal', 'desc')
            ->get();
    }

    public function show($id)
    {
        return Kegiatan::with('kategori')->findOrFail($id);
    }
}
