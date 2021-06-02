<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('-usuario', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidoPa');
            $table->string('apellidoMa');
            $table->year('añoNacimiento');
            $table->string('telefono')->unique();
            $table->string('email')->unique();
            $table->string('calle');
            $table->string('numcalle');
            $table->smallInteger('idColonia');
            $table->smallInteger('idServicio');
            $table->smallInteger('idClasificacion');
            $table->string('urlFoto');
            $table->smallInteger('Estado');
            $table->smallInteger('Municipio');
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
 
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        
    }
}
