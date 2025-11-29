# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `yarn dev` - Start Vite dev server with HMR
- `yarn build` - TypeScript check + production build
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build locally

## Tech Stack

- React 19 with TypeScript (~5.9)
- Vite 7 as bundler
- Tailwind CSS 4
- ESLint with TypeScript and React hooks plugins

## Architecture

This is a minimal React template with the following structure:

- `src/main.tsx` - React root entry point with StrictMode
- `src/App.tsx` - Root application component
- `src/components/` - Reusable React components
- `src/assets/` - Static assets (images, SVGs)

## Code Conventions

- Functional components with React hooks
- Strict TypeScript mode enabled (noUnusedLocals, noUnusedParameters)
- ESNext modules with bundler resolution
