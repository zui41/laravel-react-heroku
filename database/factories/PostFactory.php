<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Theme;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
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
            'theme_id' => Theme::factory(),
            'content' => fake()->sentence(),
            'posted_by' => User::factory(),
            'created_at' => $date,
            'updated_at' => $date,
        ];
    }
}
