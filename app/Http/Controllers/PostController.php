<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Show all post informations.
     *
     */
    public function index(Request $request): Response
    {
        try {
            $posts = Post::where('theme_id', $request->theme_id)
                        ->postImages()
                        ->comments()
                        ->reactions()
                        ->orderBy('created_at', 'desc')->get();

            return response()->json($posts, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Store post information.
     *
     */
    public function store(Request $request): Response
    {
        try {
            $post = Post::create([
                'theme_id' => $request->theme_id,
                'content' => $request->content,
                'posted_by' => Auth::id(),
            ]);

            if ($request->file('imgs')) {
                foreach($request->file('imgs') as $img) {
                    $img_path = $img->store('post_imgs');
                    $post_image = PostImage::create([
                        'post_id' => $request->post_id,
                        'img_path' => $img_path,
                    ]);
                };
            };

            return response()->json($theme, 201);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Show post detail.
     *
     */
    public function detail(Request $request): Response
    {
        try {
            $post = Post::findOrFail($request->id)
                        ->postImages()->comments()
                        ->reactions()->get();

            return response()->json($post, 200);
        } catch (Exception $e) {
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Update post information.
     *
     */
    public function update(Request $request): Response
    {
        try {
            $post = Post::findOrFail($request->id)->update([
                'content' => $request->content,
            ]);

            return response()->json($post, 200);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }

    /**
     * Delete post information.
     *
     */
    public function delete(Request $request): Response
    {
        try {
            Post::findOrFail($request->id)->delete();

            return response()->json(null, 204);
        } catch (Exception $e) {
            DB::rollback();
            Log::error($e);

            return response()->json(404);
        }
    }
}
