<?php

namespace App\Http\Controllers;

use App\Models\ColoniaMunicipio;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ColoniaMunController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ColoniaMunicipio::all()->toJson();
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
     * @param  \App\Models\ColoniaMunicipio  $coloniaMunicipio
     * @return \Illuminate\Http\Response
     */
    public function show(ColoniaMunicipio $coloniaMunicipio)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ColoniaMunicipio  $coloniaMunicipio
     * @return \Illuminate\Http\Response
     */
    public function edit(ColoniaMunicipio $coloniaMunicipio)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ColoniaMunicipio  $coloniaMunicipio
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ColoniaMunicipio $coloniaMunicipio)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ColoniaMunicipio  $coloniaMunicipio
     * @return \Illuminate\Http\Response
     */
    public function destroy(ColoniaMunicipio $coloniaMunicipio)
    {
        //
    }
}
