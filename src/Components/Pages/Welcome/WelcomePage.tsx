import React, { useEffect } from "react";
import {
  DateGreeting,
  getDateGreeting,
} from "../../../Constants/timeBasedGreetings";
import "./welcomeStyle.css";
import { good } from "../NavBar/svgs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
interface IPROPS {
  setDoWelcomed?: () => void;
  isWelcomed?: boolean;
}
const WelcomePage: React.FC<IPROPS> = ({ isWelcomed }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    // gsap.to("#welcomePage", {
    //   y: "-100%",
    //   delay: 5,
    // });

    tl.from("#good", {
      y: "-5%",
      duration: 1.2,
    });

    tl.from("#greet", {
      x: "-400%",
      duration: 0.5,
    });
    tl.from("#date-box", {
      y: "400%",
      duration: 0.5,
    });

    tl.from("#loader-circle-102", {
      bottom: "-20%",
    });
  });
  const standardUpdateTime: number = 600000;
  const [dateGreeting, setDateGreeting] =
    React.useState<DateGreeting>(getDateGreeting);

  useEffect(() => {
    const updateDateInterval = setInterval(() => {
      setDateGreeting(getDateGreeting);
      // 1 min
    }, standardUpdateTime);

    return () => {
      clearInterval(updateDateInterval);
    };
  }, []);
  // Date and Greet
  const memoziedDnG = React.useMemo(() => dateGreeting, [dateGreeting]);
  return (
    <div
      id={`${!isWelcomed && "welcomePage"}`}
      className={`flex flex-col justify-center w-full items-center full-screen gap-2 fira-font text-gray-200
        bg-[#1C1936] selection:bg-transparent selection:text-amber-500 relative p-4 shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset]
        `}
    >
      <span
        id="good"
        className="text-[8vw] leading-tight tracking-tighter  p-2 font-semibold text-center flex flex-col gap-3 items-center justify-center   "
      >
        <img src={good} alt="" className="w-[30vw]" />
      </span>
      <h5 id="greet" className="text-[8vw]">
        {[memoziedDnG.greet]}
      </h5>

      <section
        id="date-box"
        className={`text-[5vw] rounded-md  p-4 h-[15vh] w-[50vw]  *:flex flex *:justify-center bg-[#2196f3]  justify-around  items-center *:items-center font-serif
      cursor-pointer
        transition-shadow
      shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] mb-24
      `}
      >
        <span id="yyyy">{memoziedDnG.yyyy}</span>
        <span id="mm">{memoziedDnG.mm}</span>
        <span id="dd"> {memoziedDnG.dd}</span>
      </section>
      <div
        id="loader-circle-102"
        className="loader-circle-102 p-6 flex justify-center items-center"
      ></div>
    </div>
  );
};

export default WelcomePage;
