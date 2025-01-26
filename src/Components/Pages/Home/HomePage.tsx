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
      {/* <div className="text-cyan-400 h-full xs:bg-amber-800  sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500 2xl:bg-purple-500  flex justify-center items-center  font-bold text-xl">
        // {/* {window.innerWidth} PX */}
      {/* </div> */}
      <LandingPage />
    </LayOutWithNavBar>
  );
};

export default HomePage;
