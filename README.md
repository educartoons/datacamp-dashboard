# ReactJS Workshop

## 0. Scaffolding a project with Vite

Running the next line in your console you will create a basic ReactJS project

```
npm create vite@latest
```

In our workshop we use VS Code as IDE, and we highly recommend the installion of the next extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- vscode-styled-components (If we decide to use styled-components library)

## 1. ReactJS Basics

- [x] Real DOM vs Virtual DOM
- [x] Creating Components: Funcional and Class Components
- [x] Using hook useState
- [x] Using hook useEffect
- [x] Life Cycle of Components
- [ ] Context and useContext

## 2. Stying with TailwindCSS

```
npm i -D tailwindcss postcss autoprefixer
```

Now you will create two files with the next script

```
npx tailwindcss init -p
```

```
npm install -D prettier-plugin-tailwindcss
```

## 3. Test Driven Development

We will use @testing-library/react and vitest in order to add tests to our functions and components

```
npm i -D vitest jsdom @testing-library/react
```

Then in our vite.config.ts file put the next lines

```js
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

and finally we need to include the next lines in our tsconfig.json file

```json
{
  "compilerOptions": {
    "types": ["vitest/globals"]
  }
}
```

In order to see the testing coverage we need to install the next library

```
npm i -D @vitest/coverage-v8

```

## 4. Husky (run tests upon commiting or pushing)

We install the dependency

```
npm install --save-dev husky
```

And then we initialize easily with the next line

```
npx husky init
```

## 5. ReactJS under the hood

- [x] Reconciliation Algorithm
- [x] Fiber

## 6. Routing

We will use react-router-dom

## 7. Redux

Managing a Global Store

## 8. Design Patterns

- [x] Container/Presentational Pattern
- [ ] Compount Pattern
- [ ] Hooks Pattern

## 9. SOLID Principles
