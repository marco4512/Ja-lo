<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
<head>
	<meta charset="utf-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <title>JA-LO</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="icon" type="image/ico" href="https://ja-lo.herokuapp.com/images/g13506.ico" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"> </script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
</head>
<body   style="background: url(https://ja-lo.herokuapp.com/images/g223831.png) center top; width: 100vw; height: 100vh; background-color: #C64226;">
     <!-- React root DOM -->
     <div id="example"> </div>
     
      <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
<script
src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
crossorigin></script>
<script
src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"> </script>
<script > 
jQuery ('document').ready (function($) {
var menuBtn = $('.Menu-Icon'),
menu = $('.uln');
menuBtn.click(function() {
    if (menu.hasClass('show')){
        menu.removeClass('show');
    }else{
        menu.addClass('show');}
    
});
});
</script>  
</body>
<footer>
 <div class="fot">
  @2021 Todos los Derechos Reservados| Marco Martinez Martinez
 </div>
</footer>
</html>