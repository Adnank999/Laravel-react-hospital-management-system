<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FormController extends Controller
{
    public function store(Request $request)
    {
        // Validate the form data
        $user = DB::table('form')
            ->insert(
                [
                    'id' => $request->id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'patient_type' => $request->patient_type,
                    'mobile' => $request->mobile,
                    'dob' => $request->dob,
                    'gender' => $request->gender,
                    'age' => $request->age,
                    'dr-code' => $request->dr_code,
                    'ref-code' => $request->ref_code,
                    'hc-code' => $request->hc_code,
                    'department' => $request->department,
                    'test_name' => $request->test_name
                ]
            );

        // $id = Form::find($id);

       

        
    }

    public function submitForm($id)
    {

        // $id = Form::find($id);
        // $id2 = $id->id;
        // return redirect()->route('submit-form', [$id2]);




    }


    // public function urlfetch($key){

    //    echo $key;
    //     return redirect()->route('userTest', [$key]);
    // }




    public function urlfetch($id)
    {

        $id = Form::find($id);

        $id2 = $id->id;

        return redirect()->route('userTest', [$id2]);
    }
}
