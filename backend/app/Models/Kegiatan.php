<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Kegiatan extends Model
{
     use HasFactory;

    protected $fillable = [
        'kategori_id',
        'judul',
        'slug',
        'kategori',
        'deskripsi',
        'tanggal',
        'thumbnail',
        'foto',
    ];

    public function kategori()
    {
        return $this->belongsTo(
            \App\Models\KategoriKegiatan::class,
            'kategori_id'
        );
    }
    
}
