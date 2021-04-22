<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DatabaseTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eonet', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->integer('eonet');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('news', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->integer('news');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        Schema::create('globalgiving', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('globalgiving');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('eonet');
        Schema::dropIfExists('news');
        Schema::dropIfExists('globalgiving');
    }
}
