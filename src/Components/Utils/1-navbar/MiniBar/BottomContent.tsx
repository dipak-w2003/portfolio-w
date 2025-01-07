import React from "react";
import { ITOGGLE } from "../toggle";
import { FcHome } from "react-icons/fc";

interface ILinks {
  img: string;
  header: string;
  navLink?: string;
}
const BottomContent: React.FC<ITOGGLE> = ({ ToggleTorF }) => {
  const BLinks: ILinks[] = [
    {
      img: "https://www.svgrepo.com/show/286791/home.svg",
      header: "Home",
    },
    {
      img: "https://www.svgrepo.com/show/49028/paper-boat.svg",
      header: "Projects",
    },
    {
      img: "https://www.svgrepo.com/show/223946/skills.svg",
      header: "Skills",
    },
    {
      img: "https://www.svgrepo.com/show/243093/slides.svg",
      header: "Docs",
    },
  ];
  return (
    <div
      className="flex  items-center gap-2   flex-col *:flex *:text-[14px]
      font-[600] *:px-2 *:gap-2 *:text-[#51395b] relative
    "
    >
      {BLinks.map((e) => {
        return (
          <div
            className="w-[173px] h-[21px] rounded-[20px] border border-transparent bg-[rgba(187,222,251,0.29)] bg-blend-normal shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_6px_8px_rgba(0,0,0,0.3)] hover:bg-[rgba(187,222,251,0.4)]"
            key={e.header}
          >
            <img src={e.img} alt={e.header} className="h-4 mt-[1px]" />
            <h2>{e.header}</h2>
          </div>
        );
      })}

      <div
        onClick={() => ToggleTorF()}
        className=" w-[35px] h-[35.1px] rounded-full bg-gradient-to-b from-[#6bdfff] to-[#d3d3d3] absolute bottom-1 border border-transparent bg-[rgba(187,222,251,0.29)] bg-blend-normal shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_6px_8px_rgba(0,0,0,0.3)] hover:bg-[rgba(187,222,251,0.4)]"
      >
        <img
          onClick={() => ToggleTorF()}
          src="https://www.svgrepo.com/show/396235/cross-mark.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BottomContent;
