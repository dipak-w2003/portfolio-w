import React from "react";
import { ITOGGLE } from "./toggle";

const FloatingHead: React.FC<ITOGGLE> = ({ ToggleTorF }) => {
  return (
    <div
      onClick={() => ToggleTorF()}
      className="w-[80px] overflow-hidden h-[80px] bg-gradient-to-b from-[#64a3b4] to-[#d3d3d3] rounded-full flex justify-center items-center"
    >
      <div
        onClick={() => ToggleTorF()}
        className="bg-[url('https://static.vecteezy.com/system/resources/previews/028/627/081/non_2x/watercolor-anime-character-high-quality-illustration-vector-background-photo.jpg')] bg-cover bg-no-repeat w-[75px] h-[75px] rounded-full animate-pulse "
      />
    </div>
  );
};

export default FloatingHead;
