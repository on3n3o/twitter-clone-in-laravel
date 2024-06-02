<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    use HasFactory, HasUuids;

    protected $fillable = [
        'message_id',
        'path',
        'type', // image, video, audio, document

        'explicit_content',
        'graphic_content',
        'sensitive_content',

        'nsfw',
        'nsfl',
        'nsfc',
    ];

    public function message()
    {
        return $this->belongsTo(Message::class);
    }

    public function user()
    {
        return $this->through(Message::class, User::class);
    }
}
