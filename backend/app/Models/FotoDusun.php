<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FotoDusun extends Model
{
    protected $fillable = [
        'profil_dusun_id',
        'judul',
        'foto',
    ];
    public function fotoDusuns()
    {
        return $this->hasMany(FotoDusun::class);
    }

    public function profilDusun()
    {
        return $this->belongsTo(ProfilDusun::class);
    }

}
