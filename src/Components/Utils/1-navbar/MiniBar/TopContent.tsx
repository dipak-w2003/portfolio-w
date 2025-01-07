import React from "react";
import { GithubSVG, GmailSVG, LinkedInSVG, TwitterXSVG } from "./SVG";

const TopContent: React.FC = () => {
  return (
    <div className="  flex flex-col items-center gap-2">
      <HeadBar />
      <h2 className="text-[#51395b] text-[23px] font-[600]">@dipak2003w</h2>
      <HeadNavLinks />
    </div>
  );
};
function HeadBar() {
  return (
    <div className="w-[100px] overflow-hidden h-[100px] bg-gradient-to-b from-[#64a3b4] to-[#d3d3d3] rounded-full flex justify-center items-center ">
      <div
        className={`bg-[url('https://static.vecteezy.com/system/resources/previews/028/627/081/non_2x/watercolor-anime-character-high-quality-illustration-vector-background-photo.jpg')] bg-cover bg-no-repeat w-[92.37px] h-[92.37px] rounded-full`}
      ></div>
    </div>
  );
}

function HeadNavLinks() {
  const hoverStyle: string =
    "rounded-[20px] border border-transparent  bg-blend-normal shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_6px_8px_rgba(0,0,0,0.3)] hover:bg-[rgba(187,222,251,0.4)]";
  return (
    <section
      className="links flex justify-center gap-3 *:rounded-full items-center *:h-[34px] *:w-[34px] *:shadow-custom-inset *:flex *:justify-center *:items-center
    "
    >
      <div className={`bg-[#92abb0] ${hoverStyle}`}>
        <GithubSVG />
      </div>
      <div className={`bg-[#cc5f58] ${hoverStyle}`}>
        <LinkedInSVG />
      </div>
      <div className={`bg-[#51395b] ${hoverStyle}`}>
        <GmailSVG />
      </div>
      <div className={`bg-[#8c4263] ${hoverStyle}`}>
        <TwitterXSVG />
      </div>
    </section>
  );
}

export default TopContent;
