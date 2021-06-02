<?php

namespace App\Http\Controllers;

use App\Models\EstadosMunicipios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EstadosMunicipiosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EstadosMunicipios::all()->toJson();
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EstadosMunicipios  $estadosMunicipios
     * @return \Illuminate\Http\Response
     */
    public function show(EstadosMunicipios $estadosMunicipios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EstadosMunicipios  $estadosMunicipios
     * @return \Illuminate\Http\Response
     */
    public function edit(EstadosMunicipios $estadosMunicipios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EstadosMunicipios  $estadosMunicipios
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EstadosMunicipios $estadosMunicipios)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EstadosMunicipios  $estadosMunicipios
     * @return \Illuminate\Http\Response
     */
    public function destroy(EstadosMunicipios $estadosMunicipios)
    {
        //
    }
}
