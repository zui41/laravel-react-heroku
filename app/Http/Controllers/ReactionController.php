<?php

namespace App\Http\Controllers;

use App\Models\Reaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReactionController extends Controller
{
    /**
     * Show all reactions informations.
     *
     */
    public function index(Request $request): Response
    {
        try {
            $reactions = Reaction::where('post_id', $request->post_id)
                            ->orderBy('created_at', 'asc')->get();

            return response()->json($reaction, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Store reaction information.
     *
     */
    public function store(Request $request): Response
    {
        try {
            $reaction = Reaction::create([
                'post_id' => $request->post_id,
                'mst_reaction_id' => $request->mst_reaction_id,
                'reacted_by' => Auth::id(),
            ]);

            return response()->json($reaction, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Delete reactions information.
     *
     */
    public function delete(Request $request): Response
    {
        try {
            Reaction::find($request->id)->delete();

            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
