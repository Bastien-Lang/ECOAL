<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

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
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Article $article)
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
        ]);
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
        $article->update([
            'title' => $validated['title'],
            'thumbnailURL' => $validated['thumbnailURL'],
            'mediaType' => $validated['mediaType'],
            'mediaURL' => $validated['mediaURL'],
            'leadStory' => $validated['leadStory'],
            'content' => $validated['content'],
        ]);

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
        if($articles->isEmpty()){
            $articles = Article::where('tags', 'like', "%$string%")->get();
        }
        return $articles;
    }
}
