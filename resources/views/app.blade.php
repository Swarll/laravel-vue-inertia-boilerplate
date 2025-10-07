<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">

	{{-- SEO Meta Tags --}}
	<title>{{ $title ?? config('app.name', 'Laravel') }}</title>
	<meta name="description" content="{{ $description ?? config('app.name', 'Laravel') }}">
	<meta name="author" content="{{ config('app.name') }}">
	<link rel="canonical" href="{{ url()->current() }}">

	{{-- Open Graph Meta Tags --}}
	<meta property="og:title" content="{{ $title ?? config('app.name', 'Laravel') }}">
	<meta property="og:description" content="{{ $description ?? config('app.name', 'Laravel') }}">
	<meta property="og:image" content="{{ $og_image ?? asset('images/og-default.jpg') }}">
	<meta property="og:url" content="{{ url()->current() }}">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="{{ config('app.name', 'Laravel') }}">

	{{-- Twitter Card Meta Tags --}}
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="{{ $title ?? config('app.name', 'Laravel') }}">
	<meta name="twitter:description" content="{{ $description ?? config('app.name', 'Laravel') }}">
	<meta name="twitter:image" content="{{ $og_image ?? asset('images/og-default.jpg') }}">

	{{-- Favicon --}}
	<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
	<meta name="theme-color" content="#4F46E5">

	{{-- Scripts --}}
	@routes
	@vite(['resources/css/main.css', 'resources/js/app.js'])
	@inertiaHead
</head>
<body class="font-sans antialiased">
@inertia

{{-- Laravel Configuration --}}
<script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
</body>
</html>