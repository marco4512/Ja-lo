<?php

namespace App\Http\Controllers;
use App\Models\Municipo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MunicipioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Municipo::all();
    }
    public function ColMun(Request $request){
        $data = DB::table('-Municipio')
        ->join('colonia_municipios', 'colonia_municipios.Municipio_id', '=', '-Municipio.id')
        ->join('-Colonia', '-Colonia.id', '=', 'colonia_municipios.Colonia_id')
        ->select('-Municipio.id','-Colonia.id','-Colonia.nombre')
        ->where('-Municipio.id',$request->id)
        ->get()->toJson();

      return $data;
     }
    public function showToken()
    {
        echo csrf_token();
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
        $Mun = new Municipo;
        $Mun->id             =$request->id;                
        $Mun->nombre         =$request->nombre;  
        $Mun->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
