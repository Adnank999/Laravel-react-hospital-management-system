<?php


use App\Http\Controllers\FormController;
use App\Http\Controllers\Form_Controller;
use App\Http\Controllers\RedirectController;
use App\Http\Controllers\test_param_Controller;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Route::get('/user', function () {
//     return Inertia::render('User');
// })->middleware(['auth', 'verified'])->name('user');

// form

// Route::get('/register',[RegisterController::class,'create']);
// Route::post('/register',[RegisterController::class,'store']);
Route::get('/form', function () {
    return Inertia::render('LayoutComponent');
})->name('/form');



Route::post('/submit-form',[FormController::class,'store'])->name('store');
// Route::get('/submit-form/{id2}',[FormController::class,'submitForm'])->name('submit-form');
Route::get('/submit-form/{id2}',[FormController::class,'urlfetch'])->name('urlfetch');

Route::get('/userData',[Form_Controller::class,'showUser'])->name('showUser');
Route::get('/userTest',[test_param_Controller::class,'showTest'])->name('showTest');

Route::get('/userTest/{id2}',[test_param_Controller::class,'userTest'])->name('userTest');




// Route::get('/submit-form', function () {
//     return redirect('userTest/{id}');
// });

// Route::get('/submit-form',[RedirectController::class,'index'])->name('submit.index');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
