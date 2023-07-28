<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test_param extends Model
{
    use HasFactory;

   protected $table = 'test-parameter';
   
   
   public $incrementing = false;
  
}
