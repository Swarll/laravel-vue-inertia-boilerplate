<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * Render an exception into an HTTP response.
     */
    public function render($request, Throwable $e): Response
    {
        $response = parent::render($request, $e);

        if (! app()->environment(['local', 'testing']) && in_array($response->status(), [404, 500, 503])) {
            return $this->renderErrorPage($request, $response->status());
        }

        return $response;
    }

    /**
     * Render custom error pages for production.
     */
    protected function renderErrorPage(Request $request, int $status): Response
    {
        if ($status === 404) {
            return Inertia::render('Error/404')->toResponse($request)->setStatusCode(404);
        }

        // For other errors, you can add more error pages later
        return Inertia::render('Error/404')->toResponse($request)->setStatusCode($status);
    }
}
