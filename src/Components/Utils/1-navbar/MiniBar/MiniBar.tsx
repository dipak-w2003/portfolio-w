import React from "react";
import CurvedSvg from "../CurvedSvg";
import { ITOGGLE } from "../toggle";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";

const MiniBar: React.FC<ITOGGLE> = ({ ToggleTorF }) => {
  return (
    <nav
      className=" w-[200px] h-[450px] rounded-[15px] bg-gradient-to-b from-[#64a3b4] to-[#d3d3d3] relative  overflow-hidden p-2
      motion-preset-pop motion-duration-500
      "
      onMouseLeave={ToggleTorF}
    >
      <CurvedSvg />
      {/* ? contents */}
      <div className=" w-full h-full *:h-[50%] *:w-full  flex flex-col gap-2 justify-center *:relative *:z-20 *:overflow-hidden *:rounded-md">
        <TopContent />
        <BottomContent ToggleTorF={ToggleTorF} />
      </div>
    </nav>
  );
};

export default MiniBar;
