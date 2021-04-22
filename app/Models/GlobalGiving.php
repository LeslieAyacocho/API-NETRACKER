<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlobalGiving extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [ 'globalgivingid', 'user_id'];

    public function user()
    {
        return $this->belongsTo(user::class);
    }
}
