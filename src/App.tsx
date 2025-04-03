import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

/* Service Pages */
import HomePage from "./Components/Pages/Home/HomePage";
import About from "./Components/Pages/About/About";
import Project from "./Components/Pages/Project/Project";
import BlogsPage from "./Components/Pages/Blogs/Blogs";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import WelcomePage from "./Components/Pages/Welcome/WelcomePage";
import "./App.css";

const App = () => {
  const [isWelcomed, setWelcomed] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWelcomed(true);
      // Mark as welcomed after 5 seconds
    }, 5500);
    // 5500
    // Cleanup function to clear the timeout if the component is unmounted
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  // Empty dependency array ensures this effect runs only once

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
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },

    {
      path: "*",
      element: <h2>Page Not Found</h2>,
    },
  ]);

  return isWelcomed ? (
    <RouterProvider router={router} />
  ) : (
    <WelcomePage isWelcomed={isWelcomed} />
  );
  // return <RouterProvider router={router} />;
};

export default App;
