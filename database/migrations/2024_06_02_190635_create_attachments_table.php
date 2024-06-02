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
        Schema::create('attachments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('message_id')->constrained()->cascadeOnDelete();
            $table->string('path');
            $table->string('type')->default('image'); // image, video, audio, document

            $table->boolean('explicit_content')->default(false);
            $table->boolean('graphic_content')->default(false);
            $table->boolean('sensitive_content')->default(false);

            $table->boolean('nsfw')->default(false);
            $table->boolean('nsfl')->default(false);
            $table->boolean('nsfc')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('attachments', function (Blueprint $table) {
            $table->dropForeign(['message_id']);
        });
        
        Schema::dropIfExists('attachments');
    }
};
