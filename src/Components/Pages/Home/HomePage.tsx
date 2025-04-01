import React from "react";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
import HomeLandingPage from "./HomeLandingPage";
import HomeAboutPage from "./HomeAboutPage";
import HomeBlogPage from "./HomeBlogPage";

const HomePage = () => {
  return (
    <React.Fragment>
      <LayOutWithNavBar>
        <HomeLandingPage />
        <HomeAboutPage />
        <HomeBlogPage />
      </LayOutWithNavBar>
    </React.Fragment>
  );
};

export default HomePage;
