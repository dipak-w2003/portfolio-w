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
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


# GSAP (GreenSock Animation Platform)
- GSAP is a high-performance JavaScript animation library used to create smooth animations with minimal effort.
- It's known for its flexibility, robust features, and smooth animations even on mobile devices.

## Draggable Plugin:
- The Draggable plugin is one of the core plugins provided by GSAP for creating draggable elements.
- It supports dragging along the x and y axes, and allows for snapping, constraints, and custom behaviors.
```tsx
import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

// Register the Draggable plugin
gsap.registerPlugin(Draggable);

// Interface for props, which includes the children
interface IPROP {
  children: ReactNode;
}

// The main component with draggable functionality
const DraggableComponent: React.FC<IPROP> = ({ children }) => {
  // Ref for the draggable element
  const dragRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensuring dragRef.current is available
    if (dragRef.current) {
      // Initialize Draggable with configurations
      Draggable.create(dragRef.current, {
        // Enable dragging on both X and Y axes
        type: "x,y",
        onDrag: function (this: Draggable.Vars) {
          // Log the drag coordinates whenever the element is dragged
          console.log("Dragging... X:", this.x, "Y:", this.y);
        },
        onDragStart: function (this: Draggable.Vars) {
          // Log the initial drag position when dragging starts
          console.log("Drag started at X:", this.x, "Y:", this.y);
        },
        onDragEnd: function (this: Draggable.Vars) {
          // Log the final drag position when dragging ends
          console.log("Drag ended at X:", this.x, "Y:", this.y);
        },
        bounds: window,
        // Constrain the drag to the window bounds
      });
    }
  }, []);
  // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div
      ref={dragRef} 
      // Assign the ref to the div element for manipulation
      className="rounded-lg flex items-center justify-center cursor-pointer w-fit bg-red-500 p-10"
    >
      {/* Render any children inside the draggable element */}
      {children} 
    </div>
  );
};

export default DraggableComponent;
```
[For More Information](https://gsap.com/docs/v3/Plugins/Draggable/)

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