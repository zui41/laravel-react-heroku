<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Group extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'img_path'];

    /**
     * 所属するユーザーを取得
     * 
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'user_group');
    }

    /**
     * テーマを取得
     * 
     * @return HasMany
     */
    public function themes(): HasMany
    {
        return $this->hasMany(Theme::class);
    }
}
