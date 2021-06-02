<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Nav extends Controller
{
    public function index(){
        return view("Nav");
      }
    }
