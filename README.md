# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# React Keyboard Event

This event listener is used to perform some operations like toggling UI, running function for dynamic changing in value. It is highly used in Web Game Development.

```tsx useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        setToggling();
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
```

# Height_Style Issues on Mobile (and Fixes)

- Mobile Browser UI: On some mobile browsers, 100vh includes the address bar and navigation controls, which can result in unintended layouts.

- Fix: Use window.innerHeight in JavaScript to dynamically calculate the viewport height without including the browser's UI.

```ts
// viewport.ts
export const setViewportHeight = (): void => {
  // Calculate 1% of the viewport height
  const vh: number = window.innerHeight * 0.01;

  // Set it as a custom CSS variable
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

// Initialize on load
setViewportHeight();

// Recalculate on window resize
window.addEventListener("resize", setViewportHeight);
```

## Usage in CSS:

```css
/* Use the custom variable for height */
.full-screen {
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
}
```

## How to Integrate:

1. Save the TypeScript file as viewport.ts.
2. Import and execute the function in your app's entry point (e.g., main.ts or index.ts):

```tsx
import { setViewportHeight } from "./viewport";
setViewportHeight();
```

3. Add CSS to your components or global styles to use the `--vh` variable.

## Use : App.tsx

```tsx
import { setViewportHeight } from "./Constants/viewportHeight";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    return () => {
      // removing eventListener after use is better for optimization
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);
  return <main className="full-screen"></main>;
  // className : full-screen
};
```

# Custom Breakpoints in Tailwind CSS

This guide explains how to add and initialize custom breakpoints in Tailwind CSS for screen sizes smaller than the default `sm` breakpoint (640px).

[official Tailwind installation guide](https://tailwindcss.com/docs/installation).

---

## Steps to Add a Custom Breakpoint Smaller than `sm`

### 1. Locate the `tailwind.config.js` File

This file is typically located at the root of your project. If it doesn't exist, generate one by running:

```bash
tailwindcss init
```

This will create a minimal `tailwind.config.js` file.

---

### 2. Define a Custom Breakpoint

Add a custom breakpoint (e.g., `xs` for `375px`) in the `screens` section under the `extend` property:

#### Why 375px is Ideal?

- Standard for modern devices: Popular phones like the iPhone 11, iPhone 12, and Pixel 5 have widths around 375px in portrait mode.
- Good balance: It covers smaller screens (320px) and also works well for most modern devices without adding unnecessary customizations.

```javascript
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "375px",
        // Custom breakpoint smaller than sm
      },
    },
  },
  plugins: [],
};
```

---

### 3. Use the Custom Breakpoint in Your HTML

After adding the breakpoint, you can now use it in your class names. For example:

```html
<div
  class="bg-gray-500 xs:bg-purple-500 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500"
>
  Resize the browser to see background color changes.
</div>
```

- **Default (`< 424px`)**: Gray background (`bg-gray-500`).
- **`424px` and above**: Purple background (`xs:bg-purple-500`).
- **`640px` and above**: Red background (`sm:bg-red-500`).
- **Other breakpoints (`md`, `lg`, etc.`)** will behave as usual.

---

```javascript
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: "424px", // Custom breakpoint for screens 424px and larger
      },
    },
  },
  plugins: [],
};
```

---

## Testing the Breakpoint

1. Use a responsive design tool in your browser (e.g., Chrome DevTools).
2. Set the viewport width to below `424px` to see the default style.
3. Set it to exactly `424px` or above to see the `xs` breakpoint styles applied.

---

## Notes

- Tailwind's default breakpoints are **mobile-first**, so custom breakpoints like `xs` will not interfere with the `sm` breakpoint or higher.
- You can define as many custom breakpoints as needed by adding them to the `screens` property.

# React Router

## React Router Outlet Example

This is a simple example demonstrating how to use the Outlet component in React Router to render nested routes. The Outlet acts as a placeholder for rendering nested route content within a parent layout component.

#### Features

- Nested Routes: Render different components based on the route using React Router.
- Layout Component: Share common layout elements like navigation bars across multiple routes.
- Outlet: A placeholder to display the content of nested routes.

### 1. Create Layout Component with Outlet

The Layout component wraps common elements like a navigation bar and an Outlet to render the nested routes.

```tsx
// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"; // Example of a navigation bar component

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
        {/* The Outlet renders the nested route content */}
      </main>
    </div>
  );
};

export default Layout;
```

### Define Your Routes

In your App.tsx, use the createBrowserRouter to define your routes. The Layout component is used as a wrapper for the nested routes.

```tsx
// App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // The Layout component will be used for the parent route
      children: [
        {
          path: "/",
          element: <HomePage />, // HomePage will be rendered inside the Outlet of Layout
        },
        {
          path: "about",
          element: <AboutPage />, // AboutPage will be rendered inside the Outlet of Layout
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
```

### Summary

Outlet is a React Router component used to render the content of nested routes inside a parent layout.
The Layout component can contain shared elements like navigation bars, footers, etc., and uses Outlet to render specific page content.
Nested Routes: By using createBrowserRouter and nesting routes, you can control which components are rendered for different paths while sharing a common layout.
