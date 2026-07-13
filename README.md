# React TypeScript SPA

Modern single-page application demonstrating a scalable frontend architecture with React, TypeScript, Vite, TanStack Router, TanStack Query, and Shadcn UI.

The project emphasizes strict typing, modular architecture, client-side routing, server state management, and reusable UI components built with modern frontend technologies.

## Tech Stack

### Core Technologies

- React 19
- TypeScript
- Vite
- TanStack Router
- TanStack Query
- Supabase

### UI

- Tailwind CSS v4
- Shadcn UI
- Radix UI
- Lucide React
- React Hook Form
- React Leaflet
- Recharts

### Development Tools

- ESLint
- Prettier
- Husky
- lint-staged

## General Project Requirements

### Functional Scope

- Multi-page SPA
- Client-side routing with TanStack Router
- Server state management with TanStack Query
- Data fetching from Supabase
- Responsive layout for mobile and desktop devices
- Modular project architecture
- WebSocket-based support chat

### Technical Constraints

- TypeScript-first development
- No `any` type
- Vite as the build tool
- Functional React components only
- React Hooks
- Strict typing
- Separation of UI and business logic
- Reusable UI components based on Shadcn UI

### Quality Standards

- Clean and maintainable code
- Consistent code style and formatting
- ESLint and Prettier integration
- Git hooks powered by Husky
- lint-staged for staged files
- Conventional commit messages
- Pull Request workflow

## Architecture

The project follows a lightweight Feature-Sliced Design (FSD)-inspired architecture.

The codebase is organized into independent layers that separate application initialization, business logic, domain entities, reusable features, shared utilities, and UI components. This approach improves scalability, maintainability, and code reuse.

The project currently includes:

- reusable customer management workflows built with React Hook Form and TanStack Query mutations;
- a transaction review workflow with React Leaflet integration for ATM location visualization;
- a WebSocket-powered support chat implemented as a reusable feature.

## Environment

This project includes the required Supabase frontend configuration in the `.env` file.

The provided environment variables contain only the public Supabase URL and anonymous key used by the frontend.

## Quality

Lighthouse audit was performed on the production build.

Results:

- Customers page — 100 / 96 / 100 / 100
- Dashboard page — 99 / 96 / 100 / 100
- Transactions page — 100 / 96 / 100 / 100

Audit screenshots are available in:

````text
docs/lighthouse/

## Getting Started

Install dependencies:

```bash
npm install
````

Start the development server:

```bash
npm run dev
```

Open in your browser:

```text
http://localhost:5173
```

## Available Scripts

Run ESLint:

```bash
npm run lint
```

Automatically fix ESLint issues:

```bash
npm run lint:fix
```

Check formatting:

```bash
npm run format:check
```

Format project files:

```bash
npm run format
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
