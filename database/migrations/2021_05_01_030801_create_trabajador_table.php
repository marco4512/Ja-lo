<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrabajadorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trabajador1', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('apellido');
            $table->year('añoNacimiento');
            $table->string('telefono')->unique();
            $table->string('email')->unique();
            $table->string('calle');
            $table->string('numcalle');
            $table->integer('idColonia');
            $table->smallInteger('idServicio');
            $table->smallInteger('idClasificacion');
            $table->string('Foto1');
            $table->string('Foto2');
            $table->string('Foto3');
            $table->smallInteger('Estado');
            $table->smallInteger('Municipio');
            $table->string('password');
            $table->string('Descripcion');
            $table->integer('Comentarios');
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
        Schema::dropIfExists('trabajador1');
    }
}
