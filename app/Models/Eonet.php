<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eonet extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [ 'eonet', 'user_id'];

    public function user()
    {
        return $this->belongsTo(user::class);
    }
}
