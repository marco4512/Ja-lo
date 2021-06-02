<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColoniaMunicipio extends Model
{
    use HasFactory;
    protected $table ='colonia_municipios';
    protected $fillable =[
        
    ];
    public $timestamps = false;
}
