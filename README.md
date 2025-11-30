# Warsaw_AI_Hackathon_TrustNexus_Frontend

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- Yarn package manager

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

### Video Demo
[![Watch the video](https://img.youtube.com/vi/pDMuoqMXJ9Y/maxresdefault.jpg)](https://www.youtube.com/watch?v=pDMuoqMXJ9Y)

## Screenshots

### Dashboard - Email Summaries
![Dashboard with Emails](public/image2.png)


## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
