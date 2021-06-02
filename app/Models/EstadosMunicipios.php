<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadosMunicipios extends Model
{
    use HasFactory;
    protected $table ='_estados__municipios';
    protected $fillable =[
        
    ];
    public $timestamps = false;
}
