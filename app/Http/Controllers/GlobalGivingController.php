<?php

namespace App\Http\Controllers;

use App\Models\GlobalGiving;
use Illuminate\Http\Request;

class GlobalGivingController extends Controller
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

    public function getGlobalGiving($id)
    {
        $globalgiving = GlobalGiving::orderBy('id')
        ->where('user_id', '=', $id)
        ->get();
        return response()->json($globalgiving);
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
        $globalgiving = GlobalGiving::create($request->all());
        return response()->json($globalgiving);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GlobalGiving  $globalGiving
     * @return \Illuminate\Http\Response
     */
    public function show(GlobalGiving $globalGiving)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GlobalGiving  $globalGiving
     * @return \Illuminate\Http\Response
     */
    public function edit(GlobalGiving $globalGiving)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GlobalGiving  $globalGiving
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GlobalGiving $globalGiving)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GlobalGiving  $globalGiving
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $globalGiving = GlobalGiving::find($id)->delete();
        return response()->json($globalGiving);
    }
}
