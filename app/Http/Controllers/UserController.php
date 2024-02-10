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
            $user = User::find($request->user_id);
            $user->groups()->sync($request->group_id, false);

            return response()->json($group, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
