import { dropdown, github, twitter } from "./svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import Explores from "./Explores";
import MiniExplores from "./MiniExplores";
const NavBar = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  useGSAP(() => {
    const ids = ["explore", "github", "twitter", "login"];
    const tl = gsap.timeline();

    gsap.from(`#logo-name`, {
      // x: -100,
      // duration: 0.66,
    });
    ids.forEach((ids) => {
      tl.from(`#${ids}`, {
        y: -100,
        duration: 0.66,
      });
    });
    gsap.from("#ham-icon", {
      y: -100,
      delay: 0.66,
      duration: 0.66,
    });
  });
  const onFocus_onClick = () => setTimeout(() => setToggle(!toggle), 0);
  const onFocusOut_onMove = () => setTimeout(() => setToggle(false), 700);
  React.useEffect(() => {
    return () => {
      console.log("updated drop-down, ", toggle);
    };
  }, [toggle]);
  return (
    <nav
      className={`w-full h-[65px] bg-[rgba(255,255,255,0.86)] bg-blend-normal 
      shadow-[0px_5px_4px_rgba(0,0,0,0.25)] flex items-center px-6 justify-between fira-font
      sticky top-0

    `}
    >
      <h2
        id="logo-name"
        className="norican-font  text-[37px] font-normal text-right tracking-[3.6px] transition-all md:text-3xl lg:text-4xl"
      >
        Dipak Tamang
      </h2>

      <ul
        id="links"
        className="hidden  md:flex gap-4 lg:flex xl:flex *:cursor-pointer relative  *:hover:*:text-white *:transition-colors"
      >
        <li
          onClick={onFocus_onClick}
          id="explore"
          className="relative overflow-visible"
        >
          <h2 onClick={onFocus_onClick}>Explore</h2>
          <img
            className={`h-[20px]  object-cover animate-pulse transition-all`}
            style={{ rotate: toggle ? "180deg" : "0deg" }}
            src={dropdown}
            alt="dropdown"
          />
          <div className="absolute w-[80px] bg-[red] transition-all"></div>
        </li>
        {/* Drop-down-options */}
        {toggle && (
          <div
            onClick={onFocus_onClick}
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={onFocusOut_onMove}
            className="  absolute -left-7  top-[125%] w-[170px] h-[220px] border border-transparent 
            bg-[#f7f7f7] shadow-[4px_8px_4px_rgba(0,0,0,0.25)] 
            motion-preset-confetti motion-duration-1000
            "
          >
            <Explores />
          </div>
        )}
        <li id="github">
          <h2>Github</h2>
          <img src={github} className="h-[22px] object-cover" alt="github" />
        </li>
        <li id="twitter">
          <h2>Twitter</h2>
          <img src={twitter} className="h-[23px] object-cover" alt="twitter" />
        </li>
        <button
          id="login"
          style={{ width: "90px" }}
          className="border-none bg-[#477495] hover:bg-[#365970]  text-white"
        >
          Login
        </button>
      </ul>

      {/* ? mobile Ham Menu */}
      <IoMenuSharp
        onClick={onFocus_onClick}
        className="text-4xl md:hidden block lg:hidden xl:hidden cursor-pointer "
        id="ham-icon"
      />
      {/* Drop-down-options */}
      {toggle && (
        <div
          className="  absolute right-0  top-0 w-full full-screen border border-transparent 
            bg-[#f7f7f7] shadow-[4px_8px_4px_rgba(0,0,0,0.25)] 
            md:hidden flex flex-col justify-around items-center lg:hidden xl:hidden
            "
        >
          <MiniExplores />
          <button onClick={onFocus_onClick}>Close</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
