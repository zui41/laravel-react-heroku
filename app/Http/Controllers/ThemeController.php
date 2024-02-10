<?php

namespace App\Http\Controllers;

use App\Models\Theme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ThemeController extends Controller
{
    /**
     * Show all theme informations.
     *
     */
    public function index(Request $request): Response
    {
        try {
            $themes = Theme::where('group_id', $request->group_id)
                            ->orderBy('created_at', 'desc')->get();
            // TODO Postの新しい順にソートしたい
            // $themes = Theme::where('group_id', $request->group_id)
            //                 ->orderBy('created_at')->get();

            return response()->json($themes, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Store theme information.
     *
     */
    public function store(Request $request): Response
    {
        try {
            $theme = Theme::create([
                'group_id' => $request->group_id,
                'name' => $request->name,
            ]);

            return response()->json($theme, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Show theme detail.
     *
     */
    public function detail(Request $request): Response
    {
        try {
            $theme = Theme::findOrFail($request->id);

            return response()->json($theme, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Update theme information.
     *
     */
    public function update(Request $request): Response
    {
        try {
            $theme = Theme::findOrFail($request->id)->update([
                'name' => $request->name,
            ]);

            return response()->json($theme, 200);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Delete theme information.
     *
     */
    public function delete(Request $request): Response
    {
        try {
            Theme::findOrFail($request->id)->delete();

            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
