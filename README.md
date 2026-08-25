# Kesarganj Sewing Machine Website

A responsive, multilingual business website for a local sewing-machine sales and repair shop in Ajmer, Rajasthan.

## What the site includes

- Sewing-machine product catalogue and categories
- Repair and maintenance services
- Image gallery
- About and contact sections
- English, Hindi, and Hinglish translations
- Responsive mobile and desktop layouts
- WhatsApp and phone contact actions
- SEO-ready semantic page structure

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Motion
- Lucide React

## Project structure

```text
src/
├── assets/          # Local static assets
├── components/      # Shared navigation and footer UI
├── lib/             # Shared application logic, including i18n
├── locales/         # English, Hindi, and Hinglish translations
├── pages/           # Main site views
├── App.tsx          # Application shell and view orchestration
└── main.tsx         # Application entry point
```

## Development

### Requirements

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The development server runs on `http://localhost:3000`.

### Validate the project

```bash
npm run typecheck
npm run build
```

### Preview a production build

```bash
npm run preview
```

## Environment variables

The current frontend does not require environment variables. Do not add API keys to the repository.

If a future backend integration requires secrets, keep them in the deployment platform's secret manager and document only the variable names separately.

## Content and business data

Business contact details, service descriptions, product information, and marketing claims have been verified for the current client deployment.

## Deployment

This is a standard Vite frontend and can be deployed to any static-hosting platform that supports SPA fallbacks.

For production deployments, ensure the host serves `index.html` for client-side routes and that the final canonical domain is configured in the site's SEO metadata.

## Repository standards

- Keep production source code free of temporary migration scripts.
- Keep dependencies limited to packages used by the application.
- Run `npm run typecheck` and `npm run build` before pushing changes.
- Never commit secrets, private keys, or local environment files.

## License

MIT License. See [LICENSE](LICENSE).
