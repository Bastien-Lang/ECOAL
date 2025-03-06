<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return $articles;
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return $article;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required',
            'thumbnailURL' => 'required',
            'mediaType' => 'required',
            'mediaURL' => 'required',
            'leadStory' => 'required',
            'content' => 'required',

        ]);

        $article = Article::create([
            'title' => $validated['title'],
            'thumbnailURL' => $validated['thumbnailURL'],
            'mediaType' => $validated['mediaType'],
            'mediaURL' => $validated['mediaURL'],
            'leadStory' => $validated['leadStory'],
            'content' => $validated['content'],
            'user_id' => $validated['user_id'

        ]]);

        return $article;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {

    }

    public function search(Request $request, $string)
    {
        $articles = Article::where('title', 'like', "%$string%")->get();
        return $articles;
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {

        Article::create([
            'title' => $request->title,
            'content' => $request->content1,
            'thumbnailURL' => $request->thumbnailURL,
            'mediaType' => $request->mediaType,
            'mediaURL' => $request->mediaURL,
            'leadStory' => 1,
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        return response()->json(['message' => 'Article uploaded!' ], 200);
    }
}
