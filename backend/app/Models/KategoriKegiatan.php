<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class KategoriKegiatan extends Model
{
    use HasFactory;

    protected $fillable = ['nama'];

    // This tells Filament which attribute to use as the "title"
    protected static ?string $title = 'nama';
}
