<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'content' => $this->faker->text(),
            'language' => $this->faker->randomElement(['en']),
            // 'user_id' => \App\Models\User::factory(),
            'status' => $this->faker->randomElement(['new', 'approved', 'rejected']),
            'shadow_banned' => $this->faker->boolean(),
            'virality_score' => $this->faker->randomFloat(2, 0, 100),
            'preferred_reader_age_lowest' => $this->faker->numberBetween(0, 100),
            'preferred_reader_age_highest' => $this->faker->numberBetween(0, 100),

            'explicit_content' => $this->faker->boolean(),
            'graphic_content' => $this->faker->boolean(),
            'sensitive_content' => $this->faker->boolean(),
            'political_content' => $this->faker->boolean(),
            'religious_content' => $this->faker->boolean(),
            'sexual_content' => $this->faker->boolean(),
            'hate_speech' => $this->faker->boolean(),
            'harassment' => $this->faker->boolean(),
            'spam' => $this->faker->boolean(),
            'fake_news' => $this->faker->boolean(),

            'nsfw' => $this->faker->boolean(),
            'nsfl' => $this->faker->boolean(),
            'nsfc' => $this->faker->boolean(),
        ];
    }
}
