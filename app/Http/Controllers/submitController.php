<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class submitController extends Controller
{
    public function submitRedirect() {

        foreach (Form::all() as $form) {
            echo $form->id;
        }
        // $single_id = Form::find(id);
    }
}
