import { useEffect, useState, Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./Components/Pages/Welcome/WelcomePage";
import { BLOGS_COLLECTIONS_INFOS } from "./Components/Pages/Blogs/Collections/BLOGS_LIST";
import "./App.css";

// Lazy load pages
const HomePage = lazy(() => import("./Components/Pages/Home/HomePage"));
const About = lazy(() => import("./Components/Pages/About/About"));
const Project = lazy(() => import("./Components/Pages/Project/Project"));
const BlogsPage = lazy(() => import("./Components/Pages/Blogs/Blogs"));
const Dashboard = lazy(() => import("./Components/Pages/Dashboard/Dashboard"));
const PageNotFound = lazy(() => import("./Components/Pages/PageNotFound"));

const App = () => {
  const [isWelcomed, setWelcomed] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWelcomed(true);
    }, 5500);

    return () => clearTimeout(timeout);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/blog",
      element: <BlogsPage />,
      children: BLOGS_COLLECTIONS_INFOS.map((blog) => ({
        path: blog.blogPath,
        element: <blog.blogElement />,
      })),
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return isWelcomed ? (
    <Suspense
      fallback={<div className="text-white text-center p-8">Loading...</div>}
    >
      <RouterProvider router={router} />
    </Suspense>
  ) : (
    <WelcomePage isWelcomed={isWelcomed} />
  );
};

export default App;
