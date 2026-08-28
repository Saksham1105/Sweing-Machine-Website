# Kamal Sewing Machines

Website foundation for Sewing Machine Sales & Repairs in Ajmer, Rajasthan. Fully responsive with English, Hindi, and Hinglish translation systems.

## Overview

Kamal Sewing Machines is a family-run business established in 1995, offering high-quality sewing machines, home installations, and expert repair services. This website serves as their digital storefront, allowing users to explore their catalog, learn about their services, view the gallery, and easily contact them for inquiries or doorstep services.

## Features

- **Sewing Machine Catalog:** Detailed views of available domestic and industrial machines.
- **Repair Services:** Information on workshop repairs and doorstep services.
- **Gallery:** Visual showcase of the showroom and machine installations.
- **About Section:** The history and legacy of Kamal Sewing Machines.
- **Contact Section:** Integrated map and WhatsApp contact forms for immediate support.
- **Responsive Design:** Highly optimized UI scaling across mobile, tablet, and desktop devices.
- **Multi-language Support:** English, Hindi, and Hinglish translations built-in.
- **Route-Based Code Splitting:** Heavy page sections are lazy-loaded via React Suspense.
- **Intent-Based Route Prefetching:** Automatic background loading of pages when hovering over navigation links.
- **Optimized Images:** WebP format images with lazy loading for below-the-fold content.

## Pages

- **Home:** Hero section, core value propositions, and quick navigation links.
- **Machines:** Detailed catalog of domestic, industrial, and specialized sewing machines.
- **Repair Services:** Overview of repair options including workshop visits and doorstep services.
- **Gallery:** Real photos of the showroom, installations, and repairs.
- **About:** The legacy of the business since 1995.
- **Contact:** Business address, operating hours, Google Maps embed, and WhatsApp CTA.

## Technology Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Cloudflare Pages** deployment configuration

## Performance Optimizations

- **WebP Images:** All static image assets are served in modern WebP format.
- **Lazy Loading & Code Splitting:** Separate views are dynamically imported.
- **Intent-Based Prefetching:** Background fetching of page chunks when users interact with the navigation.
- **Stable Image Containers:** Prevents Cumulative Layout Shift (CLS) during image load.

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── lib/             # Context providers and utilities
├── locales/         # Translation JSON files (en, hi, hinglish)
├── pages/           # Individual page views
├── types/           # TypeScript definitions
└── App.tsx          # Main application layout and state-based routing
public/              # Public assets and _redirects for Cloudflare
```

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build

To create a production-ready build:
```bash
npm run build
```

## Deployment

This project is configured for seamless deployment to **Cloudflare Pages**. 
- The `public/_redirects` file ensures correct SPA fallback if traditional routing is ever added.
- Deploy the `dist` folder directly to Cloudflare Pages after running the build command.

## Environment Variables

No environment variables are required to run this project.
