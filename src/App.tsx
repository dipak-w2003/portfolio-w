import { setViewportHeight } from "./Constants/viewportHeight";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/Pages/Home/HomePage";
import ProjectsPage from "./Components/Pages/Projects/ProjectsPage";
import SkillsPage from "./Components/Pages/Skills/SkillsPage";
import DocsPage from "./Components/Pages/Docs/DocsPage";
import Layout from "./Components/Utils/1-navbar/LayoutNav";

const App = () => {
  useEffect(() => {
    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
        {
          path: "/skills",
          element: <SkillsPage />,
        },
        {
          path: "/docs",
          element: <DocsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
