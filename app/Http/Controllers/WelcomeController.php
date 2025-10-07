<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use Inertia\Response;
use Parsedown;

class WelcomeController extends Controller
{
    public function __invoke(): Response
    {
        $readmePath = base_path('README.md');
        $readmeContent = File::exists($readmePath)
            ? File::get($readmePath)
            : '# Welcome\n\nREADME.md not found.';

        $parsedown = new Parsedown();
        $readmeHtml = $parsedown->text($readmeContent);

        return Inertia::render('Welcome', [
            'readmeHtml' => $readmeHtml
        ]);
    }
}
