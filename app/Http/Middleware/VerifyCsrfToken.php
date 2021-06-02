<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'http://localhost/ja-las/public/usuarioById',
        'http://localhost/ja-las/public/usuarioUpdate',
         'http://localhost/ja-las/public/-usuario',
         'http://localhost/ja-las/public/usuarionew',
         'http://localhost/ja-las/public/usuarioDelate',
         'http://localhost/ja-las/public/NuevoMun',
         'http://localhost/ja-las/public/NTrabajador',
         'http://localhost/ja-las/public/EditarTra',
         'http://localhost/ja-las/public/UpdateTrabaja',
         'http://localhost/ja-las/public/UpdateImagen',
         'http://localhost/ja-las/public/UpdateUbicacion',
         'http://localhost/ja-las/public/updateTelefono',
         'http://localhost/ja-las/public/UpdateDescrip',
         'http://localhost/ja-las/public/Updateemail',
         'http://localhost/ja-las/public/UpdateDelete'
          
    ];
}
