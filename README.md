# Warsaw_AI_Hackathon_TrustNexus_Frontend

### Video Demo
[![Watch the video](https://img.youtube.com/vi/pDMuoqMXJ9Y/maxresdefault.jpg)](https://www.youtube.com/watch?v=pDMuoqMXJ9Y)

## Screenshots

### Dashboard - Email Summaries
![Dashboard with Emails](public/image2.png)

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- Yarn/npm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Warsaw_AI_Hackathon_TrustNexus_Frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
   or
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement (HMR):
```bash
yarn dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start Vite dev server with HMR |
| `yarn build` | TypeScript check + production build |
| `yarn lint` | Run ESLint |
| `yarn preview` | Preview production build locally |

### Tech Stack

- React 19 with TypeScript (~5.9)
- Vite 7 as bundler
- Tailwind CSS 4
- React Router DOM
- ESLint with TypeScript and React hooks plugins

### Project Structure

```
src/
├── main.tsx          # React root entry point with StrictMode
├── App.tsx           # Root application component
├── components/       # Reusable React components
├── pages/            # Page components
├── api/              # API client functions
├── types/            # TypeScript type definitions
└── assets/           # Static assets (images, SVGs)
```

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).