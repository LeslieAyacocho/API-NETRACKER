<?php

use App\Http\Controllers\AuthController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIController;
use App\Http\Controllers\EonetController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\GlobalGivingController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['api'])->group(function () {
    Route::get('/news/{id}', [APIController::class, 'getNews']);
    Route::get('/giving', [APIController::class, 'getGiving']);
});

Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/auth/login', [AuthController::class, 'login']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/me', function(Request $request) {
        return auth()->user();
    });

    Route::resource('Eonet', EonetController::class); 
    Route::resource('News', NewsController::class); 
    Route::resource('GlobalGiving', GlobalGivingController::class); 
    Route::get('/getEonet/{id}', [EonetController::class, 'getEonet']);
    Route::get('/getNews/{id}', [NewsController::class, 'getNews']);
    Route::get('/getGlobalGiving/{id}', [GlobalGivingController::class, 'getGlobalGiving']);
    Route::get('/auth/{email}', [AuthController::class, 'getUserID']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
});
