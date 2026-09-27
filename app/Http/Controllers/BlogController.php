<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function index(Request $request): Response
    {
        $posts = BlogPost::published()
            ->with('category')
            ->when(
                $request->string('category')->toString(),
                fn ($query, $categorySlug) => $query->whereHas('category', fn ($q) => $q->where('slug', $categorySlug)),
            )
            ->latest('published_at')
            ->paginate(9)
            ->withQueryString();

        return Inertia::render('marketing/blog/index', [
            'posts' => $posts->through(fn (BlogPost $post) => $post->toPublicArrayWithCategory()),
            'categories' => BlogCategory::all()->map->toPublicArray(),
            'activeCategory' => $request->string('category')->toString(),
        ]);
    }

    public function show(BlogPost $blogPost): Response
    {
        abort_unless($blogPost->is_published && $blogPost->published_at?->isPast(), 404);

        return Inertia::render('marketing/blog/show', [
            'post' => $blogPost->load('category')->toPublicArrayWithCategory(),
        ]);
    }
}
