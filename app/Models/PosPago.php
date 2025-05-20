<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PosPago extends Model
{
    use HasFactory;

    protected $fillable = ['cliente_id'];
}
