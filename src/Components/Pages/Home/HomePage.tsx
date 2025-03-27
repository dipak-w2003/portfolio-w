import React from "react";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
import HomeLandingPage from "./HomeLandingPage";
import HomeAboutPage from "./HomeAboutPage";
import HomeBlogPage from "./HomeBlogPage";

const HomePage = () => {
  const [w, setW] = React.useState<number>(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setW(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setW(window.innerWidth);
      });
    };
  }, [w]);
  return (
    <>
      <LayOutWithNavBar >
        {/* <LandingPage /> */}
          <HomeLandingPage />
          <HomeAboutPage />
          <HomeBlogPage />
      </LayOutWithNavBar>
    </>
  );
};

export default HomePage;
// xxs: bg - red - 800;
// xs: bg - green - 800;
// sm: bg - amber - 500;
// md: bg - blue - 300;
// lg: bg - black;
// xl: bg - red - 500;
