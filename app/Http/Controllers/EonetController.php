<?php

namespace App\Http\Controllers;

use App\Models\Eonet;
use Illuminate\Http\Request;

class EonetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getEonet($id)
    {
        $eonet = eonet::orderBy('id')
        ->where('user_id', '=', $id)
        ->get();
        return response()->json($eonet);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $eonet = Eonet::create($request->all());
        return response()->json($eonet);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Eonet  $eonet
     * @return \Illuminate\Http\Response
     */
    public function show(Eonet $eonet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Eonet  $eonet
     * @return \Illuminate\Http\Response
     */
    public function edit(Eonet $eonet)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Eonet  $eonet
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Eonet $eonet)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Eonet  $eonet
     * @return \Illuminate\Http\Response
     */
    public function destroy(Eonet $eonet)
    {
        //
    }
}
