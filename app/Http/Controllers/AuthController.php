<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register user.
     *
     */
    public function register(Request $request) {

        try {
            $img_path = null;
            if ($request->file('img')) {
                $img_path = $request->file('img')->store('user_imgs');
            }

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'img_path' => $img_path,
            ]);

            $token = $user->createToken('auth_token')->plainTextToken;
            $cookie = cookie('token', $token, 60 * 24); // 1日

            return response()->json($user, 201)->withCookie($cookie);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Login.
     *
     */
    public function login(Request $request) {
        try {
            $user = User::where('email', $request->email)->first();

            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'message' => 'メールアドレスかパスワードが正しくありません'
                ], 401);
            }

            $token = $user->createToken('auth_token')->plainTextToken;
            $cookie = cookie('token', $token, 60 * 24);

            return response()->json($user, 200)->withCookie($cookie);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Logout.
     *
     */
    public function logout(Request $request) {
        try {
            $request->user()->currentAccessToken()->delete();
            $cookie = cookie()->forget('token');

            return response()->json([
                'message' => 'ログアウトしました'
            ])->withCookie($cookie);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }

    }
}
