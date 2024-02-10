<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Exception;

class GroupController extends Controller
{
    /**
     * Show all group informations.
     *
     */
    public function index(): Response
    {
        try {
            $groups = Auth::user()->groups()->get();
            // TODO Postの新しい順にソートしたい
            // $groups = Auth::user()->groups()->orderBy()->get();

            return response()->json($groups, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Store group information.
     *
     */
    public function store(Request $request): Response
    {
        try {
            $img_path = null;
            if ($request->file('img')) {
                $img_path = $request->file('img')->store('group_imgs');
            }
            $group = Group::create([
                'name' => $request->name,
                'img_path' => $img_path,
            ]);

            $user = Auth::user();
            $user->groups()->sync($group->id, false);

            return response()->json($group, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
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
                'img_url' => $img_path,
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
