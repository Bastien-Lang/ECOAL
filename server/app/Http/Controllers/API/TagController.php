<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::all();
        return $tags;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => 'required | unique:tags',
        ]);

        $tag = Tag::create([
            'name' => $validated['name'],
        ]);

        return response()->noContent(201);
    }


    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        return $tag;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tag $tag)
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);
        $tag->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
    }

    public function articles(Tag $tag)
    {
        return $tag->articles;
    }
}
