<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Group;
use App\Models\Theme;
use App\Models\Comment;
use App\Models\Reaction;
use App\Models\PostImage;
use App\Models\MstReaction;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DevelopmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::factory(5)
            ->sequence(fn (Sequence $sequence) => ['email' => 'test'. $sequence->index + 1 . '@example.com'])
            ->create();
        
        $groups = Group::factory(10)
            ->hasAttached($users)
            ->create();

        $themes = Theme::factory(20)
            ->recycle($groups)
            ->create();

        $posts = Post::factory(40)
            ->recycle($themes)
            ->recycle($users)
            ->create();

        $comments = Comment::factory(80)
            ->recycle($posts)
            ->recycle($users)
            ->create();
        
        $mstReactions = MstReaction::factory(5)
            ->create();
    }
}
