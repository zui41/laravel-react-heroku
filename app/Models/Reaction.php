<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reaction extends Model
{
    use HasFactory;

    /**
     * ポストを取得
     * 
     * @return BelongsTo
     */
    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * マスタリアクションを取得
     * 
     * @return BelongsTo
     */
    public function MstReaction(): BelongsTo
    {
        return $this->belongsTo(MstReaction::class);
    }
}
