<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class APIController extends Controller
{
    public function getNews($id)
    {

        $response=Http::get("https://newsapi.org/v2/everything?q=$id&apiKey=be318bff18ad45cba771cdb1de38ba7b");
        $data = $response->json();
        return $data;
    }
    
    // public function getGiving()
    // {
    //     $response=Http::get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=be318bff18ad45cba771cdb1de38ba7b');
    //     $data = $response->json();
    //     return $data;
    // }
}
