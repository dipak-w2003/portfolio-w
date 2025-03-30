import React from "react";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
import HomeLandingPage from "./HomeLandingPage";
import HomeAboutPage from "./HomeAboutPage";
import HomeBlogPage from "./HomeBlogPage";

const HomePage = () => {
  return (
    <React.Fragment>
      <LayOutWithNavBar>
        {/* <LandingPage /> */}
        <HomeLandingPage />
        <HomeAboutPage />
        <HomeBlogPage />
      </LayOutWithNavBar>
    </React.Fragment>
  );
};

export default HomePage;
// xxs: bg - red - 800;
// xs: bg - green - 800;
// sm: bg - amber - 500;
// md: bg - blue - 300;
// lg: bg - black;
// xl: bg - red - 500;
