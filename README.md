Of course, here is the rigorously generated README translated into English.

---

# React Boilerplate

A complete toolkit for modern React development, providing a production-ready application architecture.

## ✨ Features

- **Monorepo Architecture**: Managed with Turborepo and pnpm workspaces to improve development efficiency and code reuse.
- **Multiple App Examples**: Provides three distinct application templates:
  - A full-featured `admin` dashboard (React 19 + Vite).
  - A `nextjs-app` (Next.js 15).
  - A basic `react-vite` starter template.
- **Shared UI Library**: Includes a shared UI package (`@repo/ui`) built on the principles of shadcn/ui, with Storybook for component visualization and testing.
- **Centralized Tooling**: Provides shared configurations for the entire workspace, including TypeScript (`@repo/ts-config`) and ESLint (`@repo/lint-config`), to ensure code consistency.
- **Modern Tech Stack**: Fully utilizes cutting-edge technologies like React 19, Vite, and Tailwind CSS v4.
- **State Management & Data Fetching**: Implements Zustand for state management and TanStack Query (React Query) for data fetching.
- **Complete Authentication Flow**: Demonstrates a full user authentication flow including login, registration, and logout in the `admin` and `nextjs-app` applications.
- **Comprehensive Testing Suite**: Equipped with Playwright for End-to-End (E2E) testing and Vitest for unit/component testing.
- **Code Quality Assurance**: Enforces code standards with ESLint and Prettier, standardizes commit messages with commitlint, and automates checks using Husky Git hooks.

## 📁 Project Structure

```markdown
Markdown

Of course, here is the rigorously generated README translated into English.

---

# React Boilerplate

A complete toolkit for modern React development, providing a production-ready application architecture.

## ✨ Features

- **Monorepo Architecture**: Managed with Turborepo and pnpm workspaces to improve development efficiency and code reuse.
- **Multiple App Examples**: Provides three distinct application templates:
  - A full-featured `admin` dashboard (React 19 + Vite).
  - A `nextjs-app` (Next.js 15).
  - A basic `react-vite` starter template.
- **Shared UI Library**: Includes a shared UI package (`@repo/ui`) built on the principles of shadcn/ui, with Storybook for component visualization and testing.
- **Centralized Tooling**: Provides shared configurations for the entire workspace, including TypeScript (`@repo/ts-config`) and ESLint (`@repo/lint-config`), to ensure code consistency.
- **Modern Tech Stack**: Fully utilizes cutting-edge technologies like React 19, Vite, and Tailwind CSS v4.
- **State Management & Data Fetching**: Implements Zustand for state management and TanStack Query (React Query) for data fetching.
- **Complete Authentication Flow**: Demonstrates a full user authentication flow including login, registration, and logout in the `admin` and `nextjs-app` applications.
- **Comprehensive Testing Suite**: Equipped with Playwright for End-to-End (E2E) testing and Vitest for unit/component testing.
- **Code Quality Assurance**: Enforces code standards with ESLint and Prettier, standardizes commit messages with commitlint, and automates checks using Husky Git hooks.

## 📁 Project Structure

.
├── apps/ # Directory for standalone applications
│ ├── admin/ # A full-featured admin dashboard application (React 19 + Vite)
│ ├── nextjs-app/ # A Next.js application, including E2E tests
│ └── react-vite/ # A standalone React + Vite application template
│
├── packages/ # Directory for shared packages across applications
│ ├── ui/ # Shared React UI component library (based on shadcn/ui), includes Storybook
│ ├── lint-config/ # Shared ESLint configuration
│ └── ts-config/ # Shared base TypeScript configurations
│
├── .husky/ # Git hooks for pre-commit checks
├── commitlint.config.ts # commitlint configuration for commit message standards
├── pnpm-workspace.yaml # pnpm workspace configuration file, defines the monorepo structure
└── turbo.json # Turborepo configuration for optimizing monorepo task execution
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: version `_>=_22.11.0`
- **pnpm**: version `_>=_10.12.1`

### Steps

1.  **Install Dependencies**

    ```bash
    pnpm install
    ```

2.  **Configure Environment Variables**
    Each directory in `apps` contains a `.env.example` file. Please copy it to `.env` and modify the configuration as needed.

3.  **Start the Development Server**
    This command uses Turborepo to run the development servers for all applications in parallel.
    ```bash
    pnpm dev
    ```

## 📜 Available Scripts

- `pnpm dev`: Runs all applications in development mode.
- `pnpm build`: Builds all applications and packages for production.
- `pnpm lint`: Runs ESLint checks across the entire codebase.
- `pnpm format`: Formats all code files with Prettier.
- `pnpm check-types`: Checks for type errors using the TypeScript compiler.

## 📄 License

This project is licensed under the **MIT** License. See the [LICENSE](LICENSE) file for details.
