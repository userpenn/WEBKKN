<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BeritaController;
use App\Http\Controllers\Api\KegiatanController;
use App\Http\Controllers\Api\KategoriKegiatanController;
use App\Http\Controllers\Api\ProfilDusunController;

// Get kegiatan by kategori
Route::get('/kegiatan/kegiatan/{kategori}', [KegiatanController::class, 'byKategori']);

// Get berita detail
Route::get('/berita', [BeritaController::class, 'index']);
Route::get('/berita/{id}', [BeritaController::class, 'show']);

// Get kegiatan detail
Route::get('/kegiatan', [KegiatanController::class, 'index']);
Route::get('/kegiatan/{id}', [KegiatanController::class, 'show']);

// routes/api.php
Route::get('/kategori-kegiatan', [KategoriKegiatanController::class, 'index']);

// Profile Dusun
Route::get('/profil-dusun', [ProfilDusunController::class, 'index']);


