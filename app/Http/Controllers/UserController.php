<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Invite user to group.
     *
     */
    public function invite(Request $request): Response
    {
        try {
            $user = User::findOrFail($request->user_id);
            $user->groups()->sync($request->group_id, false);

            return response()->json($group, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Update user detail.
     *
     */
    public function update(Request $request): Response
    {
        try {
            $user = Auth::user();
            if ($request->file('img')) {
                Storage::delete($user->img_path);
                $img_path = $request->file('img')->store('user_imgs');
            }
            $user->update([
                'name' => $request->name,
                'img_path' => $img_path,
            ]);

            return response()->json($user, 200);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
