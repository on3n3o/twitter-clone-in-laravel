<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'content',

        'language',
        'user_id',

        'status',
        'shadow_banned',
        'virality_score',

        'preferred_reader_age_lowest',
        'preferred_reader_age_highest',

        'explicit_content',
        'graphic_content',
        'sensitive_content',
        'political_content',
        'religious_content',
        'sexual_content',
        'hate_speech',
        'harassment',
        'spam',
        'fake_news',

        'nsfw',
        'nsfl',
        'nsfc',
    ];

    protected $casts = [
        'explicit_content' => 'boolean',
        'graphic_content' => 'boolean',
        'sensitive_content' => 'boolean',
        'political_content' => 'boolean',
        'religious_content' => 'boolean',
        'sexual_content' => 'boolean',
        'hate_speech' => 'boolean',
        'harassment' => 'boolean',
        'spam' => 'boolean',
        'fake_news' => 'boolean',
        'nsfw' => 'boolean',
        'nsfl' => 'boolean',
        'nsfc' => 'boolean',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}
