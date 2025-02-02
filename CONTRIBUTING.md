# Contributing to Steepbase

## Installation

1. `git clone git@git.drupal.org:project/steepbase.git`
2. `cd steepbase`
3. `ddev start`
4. `ddev composer-expand-install`
5. `ddev symlink-project`
6. `ddev site-install`
7. `npm install --prefix ui`
8. `npm run dev --prefix ui`

## Development (Drupal/PHP)

| Command | Description |
| --- | --- |
| `ddev phpcbf` or `ddev phpcs-fix` | Run PHP Code Beautifier and Fixer |
| `ddev phpcs` | Run PHP CodeSniffer |
| `ddev phpstan` | Run PHPStan analysis |
| `ddev phpunit` | Run PHPUnit tests |
| `ddev site-install` | Install Drupal site |
| `ddev composer-expand-install` | Install all dependencies for a complete Drupal site |
| `ddev symlink-project` | Symlink all root files/dirs into `web/modules/custom/steepbase` |

## Development (UI — React app)

| Command | Description |
| --- | --- |
| `npm run dev` | Start React app in development mode with hot reloading |
| `npm run build` | Build React app for production |
| `npm run preview` | Preview production build locally |
| `npm run code:check` | Run all code checks (TypeScript, ESLint, Prettier) |
| `npm run code:check:tsc` | Check TypeScript types |
| `npm run code:check:eslint` | Check code with ESLint |
| `npm run code:check:prettier` | Check code formatting with Prettier |
| `npm run code:fix` | Fix all auto-fixable code issues |
| `npm run code:fix:eslint` | Fix ESLint issues |
| `npm run code:fix:prettier` | Fix code formatting with Prettier |
