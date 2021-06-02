<?php

namespace App\Http\Controllers;

use App\Models\comentarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComentariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return comentarios::all()->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Comentario = new comentarios;
        $Comentario->id             =$request->id;                
        $Comentario->Trabajador_id     =$request->Trabajador_id;
        $Comentario->Comentario      =$request->Comentario;
        $Comentario->Calificacion   =$request->Calificacion;
        $Comentario->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\comentarios  $comentarios
     * @return \Illuminate\Http\Response
     */
    public function show(comentarios $comentarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\comentarios  $comentarios
     * @return \Illuminate\Http\Response
     */
    public function edit(comentarios $comentarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\comentarios  $comentarios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, comentarios $comentarios)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\comentarios  $comentarios
     * @return \Illuminate\Http\Response
     */
    public function destroy(comentarios $comentarios)
    {
        //
    }
}
