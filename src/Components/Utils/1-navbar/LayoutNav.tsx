import { Outlet } from "react-router-dom"; // To render the active page
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <GSAPmain /> */}
      <main>
        <Outlet />
        {/* The route content will be rendered here */}
      </main>
    </>
  );
};

export default Layout;
