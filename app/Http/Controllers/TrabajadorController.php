<?php

namespace App\Http\Controllers;
use App\Models\Trabajador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TrabajadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Trabajador::all()->toJson();
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
    public function TrabajadorDatosCarpin(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',1)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosMecanica(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',10)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosComputa(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',3)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosComida(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',2)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosConstru(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',4)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosDiseñoWeb(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',5)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosElectri(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',6)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosFonta(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',7)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosInformatica(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',8)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosLimp(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',9)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosPeluqe(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',11)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosPublici(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',12)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosSastre(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',13)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosSoldadura(Request $request){
        $data = 'max_questions'=0;
      return $data;
     }
     public function TrabajadorDatosSonido(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',15)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosTradu(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',16)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosTranspo(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',17)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosTutorias(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('Servicios.id','=',18)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorEditor(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('trabajador.id','=',$request-> id)
        ->get()->toJson();
      return $data;
     }
     public function TrabajadorDatosCarpinFiltro(Request $request){
        $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('-Colonia.nombre','like',"%$request->Filtro%")
        ->orWhere('-Municipio.nombre','like',"%$request->Filtro%")
        ->get()->toJson();
      return $data;
     }

     public function Login(Request $request){
        $data = DB::table('trabajador')
        ->select('trabajador.id as id')
        ->where ('trabajador.email','=',$request-> email)
        ->where ('trabajador.password','=',$request-> password)
        ->get()->toJson();
        return $data;
     }
     public function DatosTrabajaCard(Request $request){
      $data = DB::table('trabajador')
        ->join('-Municipio', '-Municipio.id', '=', 'trabajador.Municipio')
        ->join('-Colonia', '-Colonia.id', '=', 'trabajador.idColonia')
        ->join('Servicios', 'Servicios.id', '=', 'trabajador.idServicio')
        ->join('-Estado', '-Estado.id', '=', 'trabajador.Estado')
        ->select('trabajador.id as id','Servicios.id as  ServicioId','Servicios.nombre as Servicio','-Municipio.nombre as Municipio','-Estado.nombre as Estado','apellido','trabajador.nombre as trabajador','telefono','email','-Colonia.nombre as Colonia','Foto1','Foto2','Foto3','Descripcion')
        ->where ('trabajador.telefono','=',$request-> telefono)
        ->orderBy('trabajador.idClasificacion', 'desc')
        ->get()->toJson();
      return $data;
   }
     
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new Trabajador;         
        $usuario->nombre         =$request->nombre;  
        $usuario->apellido     =$request->apellido; 
        $usuario->añoNacimiento  =$request->añoNacimiento;
        $usuario->telefono       =$request->telefono;
        $usuario->email          =$request->email;
        $usuario->calle          =$request->calle;
        $usuario->numcalle       =$request->numcalle;
        $usuario->idColonia      =$request->idColonia;
        $usuario->idServicio     =$request->idServicio;
        $usuario->idClasificacion=$request->idClasificacion;
        $usuario->Foto1        =$request->Foto1;
        $usuario->Foto2        =$request->Foto2;
        $usuario->Foto3        =$request->Foto3;
        $usuario->Estado         =$request->Estado;
        $usuario->Municipio      =$request->Municipio;
        $usuario->password       =$request->password;
        $usuario->Descripcion       =$request->Descripcion;
        $usuario->Comentarios       =$request->Comentarios;
        $usuario->save();
    }
    public function showToken()
    {
     echo csrf_token();
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Trabajador  $trabajador
     * @return \Illuminate\Http\Response
     */
    public function show(Trabajador $trabajador)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Trabajador  $trabajador
     * @return \Illuminate\Http\Response
     */
    public function edit(Trabajador $trabajador)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Trabajador  $trabajador
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->nombre         =$request->nombre;
        $usuario->apellido         =$request->apellido;    
        $usuario->save();
    }
    public function updateImagen(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->Foto1        =$request->Foto1;
        $usuario->Foto2        =$request->Foto2;
        $usuario->Foto3        =$request->Foto3;
        $usuario->save();
    }
    public function updateUbicacion(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->calle          =$request->calle;
        $usuario->numcalle       =$request->numcalle;
        $usuario->idColonia      =$request->idColonia;
        $usuario->Estado         =$request->Estado;
        $usuario->Municipio      =$request->Municipio;
        $usuario->save();
    }
    public function updateTelefono(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->telefono       =$request->telefono;
        $usuario->save();
    }
    public function updateDescrip(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->Descripcion       =$request->Descripcion;
        $usuario->save();
    }
    public function updatEmail(Request $request)
    {
        $usuario = Trabajador::find($request->id);       
        $usuario->email          =$request->email;
        $usuario->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Trabajador  $trabajador
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $usuario = Trabajador::find($request->id);
        $usuario->delete();
    }
}
