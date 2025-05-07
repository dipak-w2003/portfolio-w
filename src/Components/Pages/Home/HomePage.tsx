import React, { lazy, Suspense } from "react";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";

// Lazy load components
const HomeLandingPage = lazy(() => import("./HomeLandingPage"));
const HomeAboutPage = lazy(() => import("./HomeAboutPage"));
const HomeBlogPage = lazy(() => import("./HomeBlogPage"));
const Footer1 = lazy(() => import("../Footer/Footer1"));

const HomePage: React.FC = () => {
  return (
    <LayOutWithNavBar>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeLandingPage />
        <HomeAboutPage />
        <HomeBlogPage />
        <Footer1 />
      </Suspense>
    </LayOutWithNavBar>
  );
};

export default HomePage;
