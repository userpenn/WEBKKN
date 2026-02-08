<?php

use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\KegiatanController;

Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/kegiatan', [KegiatanController::class, 'index']);
Route::get('/kegiatan/{kategori}', [KegiatanController::class, 'byKategori']);
