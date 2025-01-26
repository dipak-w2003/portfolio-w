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
    <LayOutWithNavBar>
      <LandingPage />
      {/* <img
        src={top_left_svg}
        className="fixed  h-[30vw] w-h-[30vw] object-fill top-0 "
      />
      <img
        src={bottom_right_svg}
        className="fixed  h-[30vw] w-h-[30vw] object-fill bottom-0 right-0  "
      /> */}
    </LayOutWithNavBar>
  );
};

export default HomePage;
