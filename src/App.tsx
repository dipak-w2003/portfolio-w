import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/Home/HomePage";
import About from "./Components/Pages/About/About";
import Work from "./Components/Pages/Work/Work";
import BlogsPage from "./Components/Pages/Blogs/Blogs";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";

const App = () => {
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
  ]);
  return <RouterProvider router={router} />;
};

export default App;
// ? tailwind responsive observer
// xxs:bg-red-400
// xs:bg-amber-300
// sm:bg-pink-400
// md:bg-cyan-200
// lg:bg-blue-700
// xl:bg-red-800
