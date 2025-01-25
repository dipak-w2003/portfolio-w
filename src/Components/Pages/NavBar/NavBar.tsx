import { dropdown, github, twitter } from "./svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { IoMenuSharp } from "react-icons/io5";
const NavBar = () => {
  useGSAP(() => {
    const ids = ["logo-name", "explore", "github", "twitter", "login"];
    const tl = gsap.timeline();

    // ids.forEach((ids) => {
    //   tl.from(`#${ids}`, {
    //     y: -100,
    //     x: -5,
    //     duration: 0.5,
    //   });
    // });
  });
  return (
    <nav
      className={`w-full h-[75px] bg-[rgba(255,255,255,0.56)] bg-blend-normal 
      shadow-[0px_5px_4px_rgba(0,0,0,0.25)] flex items-center px-6 justify-between fira-font
    `}
    >
      <h2
        id="logo-name"
        className=" norican-font  
        text-[37px] font-normal text-right
         tracking-[3.6px]
         md:text-3xl
         lg:text-4xl
         "
      >
        Dipak Tamang
      </h2>

      <ul
        id="links"
        className=" 
        hidden md:flex  lg:flex xl:flex *:cursor-pointer"
      >
        <li id="explore">
          <h2>Explore</h2>
          <img
            src={dropdown}
            className={`h-[20px]  object-cover animate-pulse`}
            alt="dropdown"
          />
        </li>
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

      <IoMenuSharp className="text-4xl md:hidden block lg:hidden xl:hidden  " />
    </nav>
  );
};

export default NavBar;
