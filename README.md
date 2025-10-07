# Laravel + Vue.js + Inertia.js Boilerplate

A clean, production-ready boilerplate for building modern web applications with Laravel 12, Vue.js 3, Inertia.js, and Filament admin panel.

## Stack

- **Backend**: Laravel 12 (PHP 8.3+)
- **Frontend**: Vue.js 3 + Inertia.js
- **Admin Panel**: Filament 3
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 6
- **Testing**: PHPUnit (backend) + Vitest (frontend)
- **Code Quality**: ESLint + Laravel Pint
- **Local Development**: DDEV (optional)

## Features

- ✅ Laravel 12 with latest dependencies
- ✅ Vue 3 with Composition API
- ✅ Inertia.js for seamless SPA experience
- ✅ Filament 3 admin panel
- ✅ Tailwind CSS 4 with @tailwindcss/forms
- ✅ HeadlessUI for accessible components
- ✅ Lucide icons
- ✅ Vuelidate for form validation
- ✅ Vue Quill for rich text editing
- ✅ Laravel Horizon for queue management
- ✅ Laravel Sanctum for API authentication
- ✅ Ziggy for named routes in JavaScript
- ✅ ESLint configured for Vue
- ✅ Vitest + Vue Test Utils for frontend testing
- ✅ PHPUnit for backend testing

## Quick Start

### Prerequisites

- PHP 8.3+
- Composer
- Node.js 18+ and npm
- Database (MySQL/MariaDB/PostgreSQL)
- (Optional) DDEV for local development

### Installation

#### Option 1: With DDEV (Recommended)

```bash
# Initialize DDEV
ddev config --project-type=laravel --docroot=public --php-version=8.3

# Start DDEV
ddev start

# Install dependencies
ddev composer install
ddev exec npm install

# Setup environment
ddev exec cp .env.example .env
ddev exec php artisan key:generate

# Run migrations
ddev exec php artisan migrate

# Install Filament
ddev exec php artisan filament:install --panels

# Generate Ziggy routes for JavaScript
ddev exec php artisan ziggy:generate

# Build assets
ddev exec npm run build

# For development with HMR
ddev exec npm run dev
```

#### Option 2: Without DDEV

```bash
# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate

# Configure your database in .env
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=your_database
# DB_USERNAME=your_username
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Install Filament
php artisan filament:install --panels

# Generate Ziggy routes for JavaScript
php artisan ziggy:generate

# Build assets
npm run build

# Start development servers
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

# Run Laravel Pint
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
└── web/
    └── pages.php          # Your web routes

config/                     # Laravel configuration files
database/migrations/        # Database migrations
tests/                      # PHPUnit tests
```

## Filament Admin Panel

Access the admin panel at `/admin` after running:

```bash
php artisan filament:install --panels
php artisan make:filament-user
```

## Additional Packages Included

- **Laravel Horizon**: Queue monitoring at `/horizon`
- **Laravel Nightwatch**: Database monitoring
- **Laravel Sanctum**: API authentication
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
# Remove Quill editor
npm uninstall @vueup/vue-quill

# Remove Vuelidate
npm uninstall @vuelidate/core @vuelidate/validators

# Remove Horizon
composer remove laravel/horizon
```

## Troubleshooting

### Common Issues

**"Class 'Parsedown' not found"**
```bash
composer install
```

**"Vite manifest not found"**
```bash
npm install && npm run build
```

**"Target class [WelcomeController] does not exist"**
```bash
composer dump-autoload
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
