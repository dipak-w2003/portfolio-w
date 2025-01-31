import React from "react";
import LayOutWithNavBar from "../NavBar/LayoutWithNavBar";
import LandingPage from "./LandingPage";

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
      <LayOutWithNavBar>
        <LandingPage />
      </LayOutWithNavBar>
    </>
  );
};

export default HomePage;
