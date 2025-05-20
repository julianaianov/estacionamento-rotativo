<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Isento extends Model
{
    use HasFactory;

    protected $fillable = ['cliente_id', 'motivo'];

    public function cliente()
    {
        return $this->belongsTo(\App\Models\Cliente::class);
    }
}
