import { dipak, dropdown, github, twitter } from "./svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMenuSharp } from "react-icons/io5";
import React from "react";
import Explores from "./Explores";
import MiniExplores from "./MiniExplores";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const location = useLocation();

  const onFocus_onClick = () => setTimeout(() => setToggle(!toggle), 0);
  const onFocusOut_onMove = () => setTimeout(() => setToggle(false), 700);
  location.pathname == "/" && RenderGSAP();
  React.useEffect(() => {
    sessionStorage.setItem("routeChaged", JSON.stringify(false));
    return () => {
      // console.log("updated drop-down, ", toggle);
      // console.log("location changed, ", location);
    };
  }, [location, toggle]);
  return (
    <nav
      className={`w-full h-[65px] bg-[rgb(255,255,255)] bg-blend-normal
       flex items-center px-6 justify-between fira-font
      sticky top-0
      z-[9999999999]

    `}
    >
      <img
        id="logo-name"
        src={dipak}
        className="transition-all"
        alt="logo_dipak"
      />

      {/* Hyper Links */}
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

        {/* ? connect links */}
        <li id="github">
          <a
            href="https://github.com/dipak-w2003"
            className="flex justify-between gap-4"
            target="_blank"
          >
            <h2>Github</h2>
            <img src={github} className="h-[22px] object-cover" alt="github" />
          </a>
        </li>
        <li id="twitter">
          <a
            href="https://github.com/dipak-w2003"
            className="flex justify-between gap-2"
            target="_blank"
          >
            <h2>Twitter</h2>
            <img
              src={twitter}
              className="h-[23px] object-cover"
              alt="twitter"
            />
          </a>
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
      <React.Fragment>
        <IoMenuSharp
          onClick={onFocus_onClick}
          className="text-4xl md:hidden block lg:hidden xl:hidden cursor-pointer "
          id="ham-icon"
        />
        {/* Side Nav or Mini nav for mobiles*/}
        {toggle && <MiniExplores setToggle={onFocus_onClick} />}
      </React.Fragment>
    </nav>
  );
};

export default NavBar;

async function RenderGSAP() {
  await useGSAP(() => {
    const ids = ["explore", "github", "twitter", "login"];
    const tl = gsap.timeline();
    ids.forEach((ids) => {
      tl.from(`#${ids}`, {
        y: -100,
        duration: 0.66,
      });
    });
  });
}
