<?php

namespace App\Http\Controllers\api;

use Illuminate\Http\Request;
use App\Models\Berita;
use App\Http\Controllers\Controller;


class BeritaController extends Controller
{
    public function index()
    {
        return Berita::query()
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function show($id)
    {
        return Berita::findOrFail($id);
    }
}
