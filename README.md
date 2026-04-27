# Laravel + Vue.js + Inertia.js Boilerplate

A clean, production-ready boilerplate for building modern web applications with Laravel 12, Vue.js 3, Inertia.js, and Filament admin panel.

## Stack

- **Backend**: Laravel 12 (PHP 8.3+, tested on 8.5)
- **Frontend**: Vue.js 3.5 + Inertia.js 2
- **Admin Panel**: Filament 4
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 7
- **Testing**: PHPUnit 11 (backend) + Vitest 3 (frontend)
- **Code Quality**: ESLint 9 + Laravel Pint
- **Local Development**: DDEV (optional)

## Features

- ✅ Laravel 12 with latest dependencies
- ✅ Vue 3.5 with Composition API
- ✅ Inertia.js 2 for seamless SPA experience
- ✅ Filament 4 admin panel
- ✅ Tailwind CSS 4 with @tailwindcss/forms
- ✅ HeadlessUI for accessible components
- ✅ Lucide icons
- ✅ Vuelidate for form validation
- ✅ TipTap (ProseMirror) rich text editor — see `resources/js/Components/RichTextEditor.vue`
- ✅ Laravel Horizon for queue management
- ✅ Laravel Sanctum for API authentication
- ✅ Ziggy for named routes in JavaScript
- ✅ ESLint configured for Vue
- ✅ Vitest + Vue Test Utils for frontend testing
- ✅ PHPUnit for backend testing

## Quick Start

### Prerequisites

- PHP 8.3+ (8.5 recommended)
- Composer
- Node.js 22+ and npm
- Database (MySQL/MariaDB/PostgreSQL)
- (Optional) DDEV for local development

### Installation

The Filament admin panel is already provisioned via `app/Providers/Filament/AdminPanelProvider.php` — you do **not** need to run `php artisan filament:install`.

#### Option 1: With DDEV (Recommended)

DDEV is pre-configured (`.ddev/config.yaml`: PHP 8.5, Node 22, MariaDB 10.11).

```bash
# Start DDEV (builds containers, installs deps via post-start hook)
ddev start

# Install dependencies
ddev composer install
ddev npm install

# Setup environment
ddev exec cp .env.example .env
ddev artisan key:generate

# Run migrations
ddev artisan migrate

# Generate Ziggy routes for JavaScript
ddev artisan ziggy:generate

# Create a Filament admin user
ddev artisan make:filament-user

# Build assets
ddev npm run build

# For development with HMR
ddev npm run dev
```

#### Option 2: Without DDEV

```bash
# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Default driver is SQLite — `database/database.sqlite` is created on install.
# To use MySQL/MariaDB/PostgreSQL, set DB_CONNECTION/DB_HOST/etc. in .env.

# Run migrations
php artisan migrate

# Generate Ziggy routes for JavaScript
php artisan ziggy:generate

# Create a Filament admin user
php artisan make:filament-user

# Build assets
npm run build

# Start development servers (or use `composer dev` for all-in-one)
php artisan serve
npm run dev
```

## Configuration Checklist

After installation, configure these files for your project:

### Required Changes

- [ ] **`LICENSE`**: Replace `[Your Name]` with your name or organization
- [ ] **`composer.json`**: Change `yourusername` to your GitHub username (line 3)
- [ ] **`.env`**: Update `APP_NAME`, database credentials, and `APP_URL`
- [ ] **`package.json`**: Update `name` and `description` to match your project (lines 2-4)

### Recommended Changes

- [ ] **`config/app.php`**: Review timezone and locale settings
- [ ] **`resources/views/app.blade.php`**: Update meta tags and theme color if needed
- [ ] **`vite.config.js`**: Update DDEV URLs if using DDEV (lines 39-46)

### Optional Changes

- [ ] **Favicons**: Replace `public/favicon.ico` and `public/apple-touch-icon.png`
- [ ] **OG Image**: Add `public/images/og-default.jpg` for social sharing
- [ ] **Tailwind Config**: Customize colors and theme in `tailwind.config.js`
- [ ] **User Model**: Customize fields in `app/Models/User.php` and migration
- [ ] **Remove Welcome Page**: Delete `WelcomeController.php`, `Welcome.vue`, and update routes once you have your own landing page

## Development

### Running the Application

```bash
# Backend (Laravel)
php artisan serve
# or with DDEV
ddev exec php artisan serve

# Frontend (Vite with HMR)
npm run dev

# Queue Worker (if using queues)
php artisan queue:listen

# All in one (uses concurrently)
composer dev
```

### Code Quality

```bash
# Run ESLint
npm run lint
npm run lint:fix

# Run Laravel Pint (style check / auto-fix)
./vendor/bin/pint --test
./vendor/bin/pint

# Run PHPUnit tests
php artisan test

# Run Vitest tests
npm run test
npm run test:ui
```

### Building for Production

```bash
# Build frontend assets
npm run build

# Clear and cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Optimize autoloader
composer install --optimize-autoloader --no-dev
```

## Project Structure

```
app/
├── Http/
│   ├── Controllers/        # Your controllers
│   └── Middleware/         # Inertia middleware configured
├── Models/                 # Eloquent models (User included)
└── Providers/              # Service providers

resources/
├── css/
│   └── main.css           # Tailwind entry point
├── js/
│   ├── Components/        # Vue components (empty, ready for you)
│   ├── Pages/             # Inertia pages (Welcome page included)
│   ├── Stores/            # State management (empty)
│   ├── composables/       # Vue composables (empty)
│   ├── __tests__/         # Frontend tests
│   ├── app.js             # Vue app entry point
│   └── bootstrap.js       # Axios configuration
└── views/
    └── app.blade.php      # Main layout for Inertia

routes/
├── web.php                # Loads route files from web/ — add yours via web/
├── web/
│   └── pages.php          # Public page routes
└── api.php                # API routes

bootstrap/
├── app.php                # App config (routing, middleware, exceptions)
└── providers.php          # Service provider registration

config/                     # Laravel configuration files
database/migrations/        # Database migrations
tests/                      # PHPUnit tests (Unit + Feature)
```

### Routing & middleware

- Web/api routes are wired via `bootstrap/app.php` (`withRouting()`); there is **no** `RouteServiceProvider` (removed — was double-registering routes).
- The `web` middleware group only appends `HandleInertiaRequests` and `AddLinkHeadersForPreloadedAssets`; the rest comes from Laravel's defaults.
- API uses `statefulApi()` (Sanctum) + `throttleApi()` with the `api` rate limiter (120/min) defined in `AppServiceProvider::boot()`.
- A `password-reset` rate limiter (5/min) is also defined there.

## Filament Admin Panel

The admin panel is already provisioned at `/admin`. Just create a user:

```bash
php artisan make:filament-user
```

The panel provider is at `app/Providers/Filament/AdminPanelProvider.php` — customise colours, branding, and middleware there.

## Additional Packages Included

- **Laravel Horizon**: Queue dashboard at `/horizon`
- **Laravel Nightwatch**: Application performance monitoring (APM)
- **Laravel Sanctum**: SPA / token API authentication
- **Ziggy**: Use Laravel named routes in JavaScript
- **Vuelidate**: Form validation for Vue
- **date-fns**: Modern date utility library
- **Prism.js**: Syntax highlighting

## Customization Tips

### Adding TypeScript

While not included by default, you can easily add TypeScript:

```bash
npm install -D typescript vue-tsc @vue/tsconfig
# Create tsconfig.json and rename .js files to .ts
```

### Removing Unused Packages

If you don't need certain features:

```bash
# Remove TipTap editor (also delete resources/js/Components/RichTextEditor.vue)
npm uninstall @tiptap/vue-3 @tiptap/starter-kit @tiptap/pm

# Remove Vuelidate
npm uninstall @vuelidate/core @vuelidate/validators

# Remove Horizon
composer remove laravel/horizon
```

## Troubleshooting

**"Vite manifest not found"**
```bash
npm install && npm run build
```

**"Target class [WelcomeController] does not exist"**
```bash
composer dump-autoload
```

**Ziggy import error during `vite build`**
```bash
php artisan ziggy:generate
```

**ESLint errors**
```bash
npm install
npm run lint:fix
```

## License

This boilerplate is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Credits

Built with:
- [Laravel](https://laravel.com)
- [Vue.js](https://vuejs.org)
- [Inertia.js](https://inertiajs.com)
- [Filament](https://filamentphp.com)
- [Tailwind CSS](https://tailwindcss.com)
