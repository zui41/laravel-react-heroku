<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = $this->faker->dateTimeBetween('-1year');
        
        return [
            'post_id' => Post::factory(),
            'content' => fake()->sentence(),
            'commented_by' => User::factory(),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
