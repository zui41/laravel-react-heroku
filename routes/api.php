<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ThemeController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ReactionController;

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

Route::middleware('auth:sanctum')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::group(['prefix' => 'user', 'as' => 'user.'], function () {
        Route::post('/invite', [UserController::class, 'invite']);
        Route::post('/update', [UserController::class, 'update']);
    });

    Route::group(['prefix' => 'group', 'as' => 'group.'], function () {
        Route::get('/index', [GroupController::class, 'index']);
        Route::post('/store', [GroupController::class, 'store']);
        Route::get('/detail', [GroupController::class, 'detail']);
        Route::post('/update', [GroupController::class, 'update']);
        Route::post('/delete', [GroupController::class, 'delete']);
    });

    Route::group(['prefix' => 'post', 'as' => 'post.'], function () {
        Route::get('/index', [PostController::class, 'index']);
        Route::post('/store', [PostController::class, 'store']);
        Route::get('/detail', [PostController::class, 'detail']);
        Route::post('/update', [PostController::class, 'update']);
        Route::post('/delete', [PostController::class, 'delete']);
    });

    Route::group(['prefix' => 'theme', 'as' => 'theme.'], function () {
        Route::get('/index', [ThemeController::class, 'index']);
        Route::post('/store', [ThemeController::class, 'store']);
        Route::post('/update', [ThemeController::class, 'update']);
        Route::post('/delete', [ThemeController::class, 'delete']);
    });

    Route::group(['prefix' => 'comment', 'as' => 'comment.'], function () {
        Route::get('/index', [CommentController::class, 'index']);
        Route::post('/store', [CommentController::class, 'store']);
        Route::post('/update', [CommentController::class, 'update']);
        Route::post('/delete', [CommentController::class, 'delete']);
    });

    Route::group(['prefix' => 'reaction', 'as' => 'reaction.'], function () {
        Route::get('/index', [ReactionController::class, 'index']);
        Route::post('/store', [ReactionController::class, 'store']);
        Route::post('/delete', [ReactionController::class, 'delete']);
    });
});
