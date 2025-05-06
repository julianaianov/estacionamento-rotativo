<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'nome',
        'documento',
        'tipo_pessoa',
        'email',
        'telefone',
    ];

    public function placas()
    {
        return $this->hasMany(Placa::class);
    }
} 