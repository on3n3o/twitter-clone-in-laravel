<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('content');

            $table->string('language')->default('en');
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();

            $table->string('status')->default('new');
            $table->boolean('shadow_banned')->default(false);
            $table->decimal('virality_score', 5, 2)->default(0);

            $table->integer('preferred_reader_age_lowest')->default(0);
            $table->integer('preferred_reader_age_highest')->default(100);
            
            $table->boolean('explicit_content')->default(false); // like nudity
            $table->boolean('graphic_content')->default(false); // like blood/violence/gore
            $table->boolean('sensitive_content')->default(false); // like mental health
            $table->boolean('political_content')->default(false); // like political opinions
            $table->boolean('religious_content')->default(false); // like religious opinions
            $table->boolean('sexual_content')->default(false); // like sexual content
            $table->boolean('hate_speech')->default(false); // like racism
            $table->boolean('harassment')->default(false); // like bullying
            $table->boolean('spam')->default(false); // like advertising
            $table->boolean('fake_news')->default(false); // like misinformation

            $table->boolean('nsfw')->default(false); // not safe for work can be shown between 9pm and 6am
            $table->boolean('nsfl')->default(false); // not safe for life 
            $table->boolean('nsfc')->default(false); // not safe for children cannot be shown to users under 18

            // $table->string('excluded_countries')->nullable(); // relationship

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
