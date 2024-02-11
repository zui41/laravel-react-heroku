<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Exception;
use Illuminate\Support\Facades\Response;


class GroupController extends Controller
{
    /**
     * Show all group informations.
     *
     */
    public function index(Request $request)
    {
        // try {
            $groups = User::findOrFail($request->id)->groups()->get();

            return response()->json(["id" => $groups] , 200);
        // } catch (Exception $e) {
        //     Log::error($e);

    }

    /**
     * Store group information.
     *
     */
    public function store(Request $request)
    {
        $img_path = null;

        if ($request->file('img')) {
            $img_path = $request->file('img')->store('group_imgs');
        }
        
        $group = Group::create([
            'name' => $request->name,
            'img_path' => $img_path,
        ]);
        
        $user = User::find($request->userId);
        
        if ($user) {
            $user->groups()->attach($group->id);
            return response()->json($group, 201);
        } else {
            // Handle the case where the user with the specified userId is not found
            return response()->json(['error' => 'User not found'], 404);
        }
        
    }

    /**
     * Show group detail.
     *
     */
    public function detail(Request $request): Response
    {
        try {
            $group = Group::findOrFail($request->id);

            return response()->json($group, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Update group detail.
     *
     */
    public function update(Request $request): Response
    {
        try {
            $group = Group::findOrFail($request->id);
            if ($request->file('img')) {
                Storage::delete($group->img_path);
                $img_path = $request->file('img')->store('group_imgs');
            }
            $group->update([
                'name' => $request->name,
                'img_path' => $img_path,
            ]);

            return response()->json($group, 200);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Delete group information.
     *
     */
    public function delete(Request $request): Response
    {
        try {
            $group = Group::findOrFail($request->id);

            $user = Auth::user();
            $user->groups()->detach($group->id);

            $group->delete();

            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
