<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Placa extends Model
{
    protected $fillable = [
        'cliente_id',
        'placa',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
} 