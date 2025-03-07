<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ArticleController;
use App\Http\Controllers\API\TagController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::group([
    'middleware' => 'auth:sanctum',
], function () {
    Route::get('/logout',  [AuthController::class, 'logout']);

    Route::get('/user',  function (Request $request) {
                                return $request->user();
                         });

});

Route::apiResource("articles", ArticleController::class);
Route::apiResource("tags", TagController::class);
Route::get('/tags/{tag}/articles', [TagController::class, 'articles']);
Route::get('/search/{string}', [ArticleController::class, 'search']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::post('/tags', [TagController::class, 'store']);




