import React, { ReactNode } from "react";
import NavBar from "./NavBar";
interface IProps {
  children?: ReactNode;
}
const LayOutWithNavBar = (props: IProps) => {
  return (
    <main className="flex flex-col relative">
      <NavBar />
      <section className="">{props.children}</section>
      {/* <MediaQueryWidget /> */}
    </main>
  );
};

/*
    @ This JSX/TSX function return dynamic re-rendering value in order to find the current screen size with the TailwindCSS standard likewise sm>=640px 
    Todo: Confusion about less then or more than in order to find current screen is i.e: sm, xs, lg else through out `px`
    
    */
function MediaQueryWidget() {
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

  function analyzeMediaQuery(width: number) {
    let determine: string = "";
    if (width >= 320) determine = "XXS";
    if (width >= 480) determine = "XS";
    if (width >= 640) determine = "SM";
    if (width >= 768) determine = "MD";
    if (width >= 1024) determine = "LG";
    if (width >= 1280) determine = "XL";
    if (width >= 1536) determine = "2XL";
    return `${determine}`;
  }

  return (
    <span className="widget-media-query fixed bottom-6 z-50 bg-cyan-900 text-2xl left-6 p-4 rounded-md text-white font-extrabold">
      {analyzeMediaQuery(w)}:{w}px
    </span>
  );
}

export default LayOutWithNavBar;
