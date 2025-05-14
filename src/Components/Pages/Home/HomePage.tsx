import React, { lazy, Suspense } from "react";

// Lazy load +  components
import FullScreenLoader from "../../ui/FullScreenLoaderSkeleton1";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
const HomeLandingPage = lazy(() => import("./HomeLandingPage"));
const HomeAboutPage = lazy(() => import("./HomeAboutPage"));
const HomeProjectPage = lazy(() => import("./HomeProjectPage"));
const HomeBlogPage = lazy(() => import("./HomeBlogPage"));
const HomeBlogPag2 = lazy(() => import("./HomeBlogPage2"));
const Footer1 = lazy(() => import("../Footer/Footer1"));
const HomePage: React.FC = () => {
  return (
    <LayOutWithNavBar>
      <Suspense fallback={<FullScreenLoader />}>
        <HomeLandingPage />
        <HomeAboutPage />
        <HomeProjectPage />
        <HomeBlogPage />
        <HomeBlogPag2 />
        <Footer1 />
      </Suspense>
     </LayOutWithNavBar>
  );
};

export default HomePage;
                        