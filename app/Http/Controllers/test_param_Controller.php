<?php

namespace App\Http\Controllers;



use App\Models\Form;
use App\Models\Test_param;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class test_param_Controller extends Controller
{
    public function showTest(Request $request)
    {




        $data_all = Form::all()->toArray();

        return $data_all;





       





        // return response()->json($WBC);
        // $CBC = Form::whereIn('test_name', ['Complete blood count'])->get();
        // $WBC = Form::whereIn('test_name', ['White blood cell count'])->get();
        // $CBC2 = "Complete blood count";
        // $WBC2 = "White blood cell count";
        // $RBC = Form::where('test_name', '=', 'Red blood cell count');
        // $PC = Form::where('test_name', '=', 'Platelet Count');
        // $HRBC = Form::where('test_name', '=', 'Hematocrit red blood cell');
        // $HC = Form::where('test_name', '=', 'Hemoglobin concentration');
        // $DWBC = Form::where('test_name', '=', 'Differential white blood count');
        // $RBCI = Form::where('test_name', '=', 'Red blood cell indice');




















    }


    public function userTest($id)
    {

       





        $data_single = Form::find($id);

        // return $data_single;

        $id = $data_single->id;
        $test_name = $data_single->test_name;

       

        if ($test_name === 'Complete blood count') {
            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,
                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '200',






            ]);
        } elseif ($test_name === 'White blood cell count') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '400',





            ]);


        } 
        elseif ($test_name === 'Red blood cell count') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '600',





            ]);

            
        }
        elseif ($test_name === 'Platelet Count') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '800',





            ]);

            
        } elseif ($test_name === 'Hematocrit red blood cell') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '1200',





            ]);

            
        } elseif ($test_name === 'Hemoglobin concentration') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '1400',





            ]);

            
        }
        elseif ($test_name === 'Differential white blood count') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '1600',





            ]);

            
        }
        elseif ($test_name === 'Red blood cell indice') {

            Test_param::insert([
                'id' => $id,
                'test_name' =>  $test_name,


                'iput_result' => '1',
                'Unit' => 'gl',
                'normal_range' => '1',
                'price' => '1800',





            ]);

            
        }
        
        else {
            die("Invalid test_name provided!");
        }



       





    }

    public function urlfetch($key){
        echo $key;
    }


}
