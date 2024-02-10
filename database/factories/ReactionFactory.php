<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\Reaction;
use App\Models\MstReaction;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reaction>
 */
class ReactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'post_id' => Post::factory(),
            'mst_reaction_id' => MstReaction::factory(),
            'reacted_by' => Reaction::factory(),
        ];
    }
}
