<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LegalController;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\PressController;
use App\Http\Controllers\SpeakingTopicController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Optional route-parameter prefixes ({locale?}/charlas) don't reliably match when the
// parameter is omitted and a literal segment follows, so the ES/EN routes are registered
// as two explicit groups instead (root = Spanish, /en = English) sharing the same closure.
$registerMarketingRoutes = function (): void {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('sobre-isabella', [AboutController::class, 'index'])->name('about');

    Route::get('charlas', [SpeakingTopicController::class, 'index'])->name('speaking.index');
    Route::get('charlas/{speakingTopic:slug}', [SpeakingTopicController::class, 'show'])->name('speaking.show');

    Route::get('prensa', [PressController::class, 'index'])->name('press');
    Route::get('galeria', [GalleryController::class, 'index'])->name('gallery');

    Route::get('blog', [BlogController::class, 'index'])->name('blog.index');
    Route::get('blog/{blogPost:slug}', [BlogController::class, 'show'])->name('blog.show');

    Route::get('contacto', [ContactController::class, 'create'])->name('contact.create');
    Route::post('contacto', [ContactController::class, 'store'])->name('contact.store');

    Route::post('newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

    Route::get('legal/tratamiento-de-datos', [LegalController::class, 'privacy'])->name('legal.privacy');
    Route::get('legal/terminos-y-condiciones', [LegalController::class, 'terms'])->name('legal.terms');
};

Route::group([], $registerMarketingRoutes);
Route::prefix('en')->name('en.')->group($registerMarketingRoutes);

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
