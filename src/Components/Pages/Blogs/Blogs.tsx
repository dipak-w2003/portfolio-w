import { Outlet, useLocation } from "react-router-dom";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
import { BLOGS_COLLECTIONS_INFOS } from "./Collections/BLOGS_LIST";

/*
  BlogsPage Component:
  - Displays the list of blogs if the current path is `/blog` (root of the blog section).
  - If the user navigates to a specific blog route (e.g., `/blog/blog-name`), it will render that blog using the <Outlet /> component.
  
  Logic:
    - If we're on the root blog page (`/blog`), display all the blog elements (map through BLOGS_COLLECTIONS_INFOS).
    - If we're on a nested blog route (like `/blog/blog-name`), the <Outlet /> will render the specific blog content.
*/

const BlogsPage = () => {
  // useLocation hook to track the current route path
  const location = useLocation();

  return (
    <LayOutWithNavBar>
      {/* Conditional rendering: If we're at `/blog` (root), show the list of blogs */}
      {location.pathname === "/blog" ? (
        <main className="h-full w-full">
          {/* Map through all blogs and display them */}
          {BLOGS_COLLECTIONS_INFOS &&
            BLOGS_COLLECTIONS_INFOS.map((blog, index) => (
              <blog.blogElement key={index} />
            ))}
        </main>
      ) : (
        // If on a nested blog route, render the specific blog using <Outlet />
        <Outlet />
      )}
    </LayOutWithNavBar>
  );
};

export default BlogsPage;
