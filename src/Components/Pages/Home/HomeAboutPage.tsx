import { Link } from "react-router-dom";
import programmerSVG from "./assets/svgs/Programmer.svg";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState, useRef } from "react";
import useScrollReveal from "../../../Hooks/useScrollReveal"; // Import the custom hook

const HomeAboutPage = () => {
  const landingRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  // Apply the custom scroll reveal hook
  useScrollReveal(landingRef);

  return (
    <main
      ref={landingRef}
      className="h-[100vh] bg-[#1C1936] flex xxs:flex-col md:flex-row justify-around items-center relative"
    >
      <img
        src={programmerSVG}
        alt=""
        data-reveal
        className="h-[600px] object-cover    
        xxs:h-[320px]
        md:h-[400px] 
        xl:h-[600px]
        lg:-ml-5"
      />

      <article
        className="flex flex-col w-[600px] h-[600px] relative items-center *:h-full *:w-full
        xxs:h-[320px] xxs:w-[320px]
        md:h-[400px] md:w-[400px]
        xl:h-[600px] xl:w-[600px]"
      >
        <span className="bg-gray-400 opacity-25 absolute top-0 -z-1 rounded" />

        <aside
          className="flex flex-col justify-center items-center p-8 absolute text-[#FFFFFF] 
        xxs:gap-2
        md:gap-8
        xl:gap-16"
        >
          <header
            data-reveal
            className="text-4xl font-bold underline norican-font
          xxs:text-xl
          md:text-2xl
          xl:text-5xl"
          >
            Frontend Developer
          </header>

          <p
            data-reveal
            className="text-lg text-center
          xxs:text-sm
          md:text-[15px]
          xl:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex
            sequi voluptate, animi deleniti repellat recusandae cupiditate ullam
            totam quo placeat provident. Excepturi eum dolore eaque iure eos,
            vero repellat. Ducimus delectus odit expedita molestiae animi facere
          </p>

          <button
            data-reveal
            title="explore-about-page"
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => setToggle(false)}
            className="rounded-none flex items-center w-fit xxs:mt-2 xxs:gap-2 xxs:p-4 xxs:text-lg  lg:mt-0 xl:mt-10"
          >
            <Link to={"/about"}>Know More</Link>
            <FaRegArrowAltCircleRight
              className={`text-2xl transition-all ${
                toggle ? "xxs:block " : "xxs:hidden"
              } `}
            />
          </button>
        </aside>
      </article>
    </main>
  );
};

export default HomeAboutPage;
