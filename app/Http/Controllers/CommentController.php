<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    /**
     * Show all comment informations.
     *
     */
    public function index(Request $request): Response
    {
        try {
            $posts = Comment::where('post_id', $request->post_id)
                            ->orderBy('created_at', 'desc')->get();

            return response()->json($comment, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Store commment information.
     *
     */
    public function store(Request $request): Response
    {
        try {
            $comment = Post::create([
                'post_id' => $request->post_id,
                'content' => $request->content,
                'comment_by' => Auth::id(),
            ]);

            return response()->json($comment, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Update comment information.
     *
     */
    public function update(Request $request): Response
    {
        try {
            $comment = Comment::findOrFail($request->id)->update([
                'content' => $request->content,
            ]);

            return response()->json($comment, 200);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Delete comment information.
     *
     */
    public function delete(Request $request): Response
    {
        try {
            Comment::findOrFail($request->id)->delete();

            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
