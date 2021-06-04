<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\usuarioController;
use App\Http\Controllers\EstadoController;
use App\Http\Controllers\MunicipioController;
use App\Http\Controllers\TrabajadorController;
use App\Http\Controllers\EstadosMunicipiosController;
use App\Http\Controllers\ColoniaMunController;
use App\Http\Controllers\ServicioController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ComentariosController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/example', function () {
    return view('welcome');
});
Route::get('/Index', function () {
    return view('Index');
});
Route::get('/', function () {
    return view('Index');
});
Route::get('/InicioSe', function () {
    return view('Index');
});
Route::get('/Computacion', function () {
    return view('Index');
});
Route::get('/Registro', function () {
    return view('Index');
});
Route::get('/Mecanica', function () {
    return view('Index');
});
Route::get('/Home', function () {
    return view('Index');
});
Route::get('/Carpinteria', function () {
    return view('Index');
});
Route::get('/Comida', function () {
    return view('Index');
});
Route::get('/Construccion', function () {
    return view('Index');
});
Route::get('/DiseñoWeb', function () {
    return view('Index');
});
Route::get('/Electronica', function () {
    return view('Index');
});
Route::get('/Publicidad', function () {
    return view('Index');
});
Route::get('/Fontaneria', function () {
    return view('Index');
});
Route::get('/Informatica', function () {
    return view('Index');
});
Route::get('/Limpieza', function () {
    return view('Index');
});
Route::get('/Peluqueria', function () {
    return view('Index');
});
Route::get('/Sastreria', function () {
    return view('Index');
});
Route::get('/Soldadura', function () {
    return view('Index');
});
Route::get('/Sonido', function () {
    return view('Index');
});
Route::get('/Traduccion', function () {
    return view('Index');
});
Route::get('/Transporte', function () {
    return view('Index');
});
Route::get('/Tutorias', function () {
    return view('Index');
});




Route::get('/-usuario',[usuarioController::class,'index']);
Route::get('/Trabajador',[TrabajadorController::class,'index']);
Route::post('/-usuario',[usuarioController::class,'index']);
Route::get('/-estado',[EstadoController::class,'index']);
Route::get('/-estadoc',[EstadoController::class,'create']);
Route::get('/-m',[MunicipioController::class,'index']);
Route::get('/usuarioById',[usuarioController::class,'show']);
Route::post('/usuarioById',[usuarioController::class,'show']);
Route::get('/usuarionew',[usuarioController::class,'store']);
Route::post('/usuarionew',[usuarioController::class,'store']);
Route::get('/usuarioUpdate',[usuarioController::class,'Update']);
Route::post('/usuarioUpdate',[usuarioController::class,'Update']);
Route::get('/usuarioDelate',[usuarioController::class,'destroy']);
Route::post('/usuarioDelate',[usuarioController::class,'destroy']);
Route::get('/usuarioToken',[usuarioController::class,'showToken']);
Route::post ('usuarionew','usuarioController@store');
Route::get('/list',[EstadoController::class,'list']);
Route::get('/MToken',[MunicipioController::class,'showToken']);
Route::get('/Municipios',[MunicipioController::class,'index']);
Route::post('/NuevoMun',[MunicipioController::class,'store']);
Route::get('/NuevoMun',[MunicipioController::class,'store']);
Route::get('/TToken',[TrabajadorController::class,'showToken']);
Route::post('/NTrabajador',[TrabajadorController::class,'store']);
Route::get('/MunEstado',[EstadosMunicipiosController::class,'index']);
Route::get('/Join',[EstadoController::class,'EstaMun']);
Route::get('/ColMun',[ColoniaMunController::class,'index']);
Route::get('/JoinCol',[MunicipioController::class,'ColMun']);
Route::get('/Servicios',[ServicioController::class,'index']);
Route::get('/Clasifi',[CategoriaController::class,'mostrarPrinci']);
Route::get('/AllTrabajador',[TrabajadorController::class,'TrabajadorDatosCarpin']);
Route::get('/AllTrabajadorMe',[TrabajadorController::class,'TrabajadorDatosMecanica']);
Route::get('/AllTrabajadorcomputo',[TrabajadorController::class,'TrabajadorDatosComputa']);
Route::get('/AllTrabajadorcomida',[TrabajadorController::class,'TrabajadorDatosComida']);
Route::get('/AllTrabajadorconstr',[TrabajadorController::class,'TrabajadorDatosConstru']);
Route::get('/AllTrabajadorWEB',[TrabajadorController::class,'TrabajadorDatosDiseñoWeb']);
Route::get('/AllTrabajadorElectri',[TrabajadorController::class,'TrabajadorDatosElectri']);
Route::get('/AllTrabajadorFonta',[TrabajadorController::class,'TrabajadorDatosFonta']);
Route::get('/AllTrabajadorInformatica',[TrabajadorController::class,'TrabajadorDatosInformatica']);
Route::get('/AllTrabajadorLimp',[TrabajadorController::class,'TrabajadorDatosLimp']);
Route::get('/AllTrabajadorPeluqe',[TrabajadorController::class,'TrabajadorDatosPeluqe']);
Route::get('/AllTrabajadorPublici',[TrabajadorController::class,'TrabajadorDatosPublici']);
Route::get('/AllTrabajadorSastre',[TrabajadorController::class,'TrabajadorDatosSastre']);
Route::get('/AllTrabajadorSolda',[TrabajadorController::class,'TrabajadorDatosSoldadura']);
Route::get('/AllTrabajadorSonido',[TrabajadorController::class,'TrabajadorDatosSonido']);
Route::get('/AllTrabajadorTradu',[TrabajadorController::class,'TrabajadorDatosTradu']);
Route::get('/AllTrabajadorTranspo',[TrabajadorController::class,'TrabajadorDatosTranspo']);
Route::get('/AllTrabajadorTutorias',[TrabajadorController::class,'TrabajadorDatosTutorias']);
Route::post('/TrabajadorCard',[TrabajadorController::class,'DatosTrabajaCard']);

Route::get('/Comentario',[ComentariosController::class,'Index']);
Route::get('/ComentarioNUevo',[ComentariosController::class,'store']);
Route::get('/login',[TrabajadorController::class,'Login']);
Route::get('/AllTrabajadorFiltro',[TrabajadorController::class,'TrabajadorDatosCarpinFiltro']);
Route::post('/EditarTra',[TrabajadorController::class,'update']);
Route::post('/UpdateTrabaja',[TrabajadorController::class,'TrabajadorEditor']);
Route::post('/UpdateImagen',[TrabajadorController::class,'updateImagen']);
Route::post('/UpdateUbicacion',[TrabajadorController::class,'updateUbicacion']);
Route::post('/UpdateTelefono',[TrabajadorController::class,'updateTelefono']);
Route::post('/UpdateDescrip',[TrabajadorController::class,'updateDescrip']);
Route::post('/Updateemail',[TrabajadorController::class,'updatEmail']);
Route::post('/UpdateDelete',[TrabajadorController::class,'destroy']);