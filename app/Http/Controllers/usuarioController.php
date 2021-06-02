<?php

namespace App\Http\Controllers;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class usuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return Usuario::all();
      
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
        $usuario = new Usuario;
        $usuario->id             =$request->id;                
        $usuario->nombre         =$request->nombre;  
        $usuario->apellidoPa     =$request->apellidoPa;
        $usuario->apellidoMa     =$request->apellidoMa; 
        $usuario->añoNacimiento  =$request->añoNacimiento;
        $usuario->telefono       =$request->telefono;
        $usuario->email          =$request->email;
        $usuario->calle          =$request->calle;
        $usuario->numcalle       =$request->numcalle;
        $usuario->idColonia      =$request->idColonia;
        $usuario->idServicio     =$request->idServicio;
        $usuario->idClasificacion=$request->idClasificacion;
        $usuario->urlFoto        =$request->urlFoto;
        $usuario->Estado         =$request->Estado;
        $usuario->Municipio      =$request->Municipio;
        $usuario->password       =$request->password;
        $usuario->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $usuario = DB::table('-usuario')->where('id',$request->control)->get();
        return $usuario;
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
    public function showToken()
    {
        echo csrf_token();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $usuario = Usuario::find($request->id);
        $usuario->nombre = $request->nombre;
        $usuario->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request) 
    {
        $usuario = Usuario::find($request->id);
        $usuario->delete();
    }
  
}
