<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProfilDusun;

class ProfilDusunController extends Controller
{
    public function index()
    {
        return ProfilDusun::with('fotoDusuns')->first();
    }
}
