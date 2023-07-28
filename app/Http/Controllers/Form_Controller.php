<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use App\Models\Form;
use App\Models\Test_param;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Form_Controller extends Controller
{
    public function showUser(){

        $userData = DB::table('form')->get();

         return $userData;
       
        // $CBC = Form::where('test_name','=','Complete blood count')->get();
        // $WBC = Form::where('test_name','=','White blood cell count')->get();
        // $RBC = Form::where('test_name','=','Red blood cell count')->get();
        // $PC = Form::where('test_name','=','Platelet Count')->get();
        // $HRBC = Form::where('test_name','=','Hematocrit red blood cell')->get();
        // $HC = Form::where('test_name','=','Hemoglobin concentration')->get();
        // $DWBC = Form::where('test_name','=','Differential white blood count')->get();
        // $RBCI = Form::where('test_name','=','Red blood cell indice')->get();

       

                    

    }
}
