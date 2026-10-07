# Shashank's Portfolio

A modern, responsive developer portfolio built with Next.js and React. The site presents a concise overview of skills, selected projects, professional experience, and contact information in a polished single-page experience.

## Overview

This portfolio includes:

- Responsive navigation and hero section
- Skills and technology overview
- Featured projects section
- Professional experience timeline
- Contact section and site footer
- Optimized fonts and metadata through Next.js

## Tech Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/Shashank163007/My_Portfolio-Shashank316007.git
cd My_Portfolio-Shashank316007
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Serves the production build |
| `npm run lint` | Runs ESLint checks |

## Project Structure

```text
src/
├── app/                 # App Router entry points and global styles
└── components/         # Portfolio sections and shared UI components
public/                  # Static assets
```

## Customization

The main portfolio sections are organized in `src/components/`. Update the content in the relevant component, then run the development server to preview changes. Global styling and layout configuration are located in `src/app/`.

## Production Build

```bash
npm run lint
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js, including [Vercel](https://vercel.com/).

## License

This project is intended as a personal portfolio. Please contact the repository owner before reusing its personal content or branding.
