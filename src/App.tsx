import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/Home/HomePage";
import About from "./Components/Pages/About/About";
import Work from "./Components/Pages/Work/Work";
import BlogsPage from "./Components/Pages/Blogs/Blogs";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import WelcomePage from "./Components/Pages/Welcome/WelcomePage";
import { useEffect, useState } from "react";

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
      element: <Work />,
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
};

export default App;
