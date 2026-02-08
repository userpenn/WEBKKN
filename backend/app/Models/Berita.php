<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;
class Berita extends Model
{
    use HasFactory;

    protected $fillable = [
        'judul',
        'slug',
        'konten',
        'embed_link',
        'thumbnail',
    ];

    protected static function booted()
    {
        static::creating(function ($berita) {
            $berita->slug = Str::slug($berita->judul);
        });
    }
}
