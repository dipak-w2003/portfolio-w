import React, { useEffect } from "react";
import {
  DateGreeting,
  getDateGreeting,
} from "../../../Constants/timeBasedGreetings";
import { Svg } from "./WelcomeSVGs";
interface IPROPS {
  setDoWelcomed?: () => void;
  isWelcomed?: boolean;
}
const WelcomePage: React.FC<IPROPS> = ({ isWelcomed }) => {
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
      id={`${!isWelcomed ? "welcomePage" : " "}`}
      className={`flex flex-col justify-center w-full items-center full-screen gap-6 fira-font text-gray-200 bg-black `}
    >
      {/* <img src={dipak} alt="" className="h-24 object-contain" /> */}
      <h2 className="text-8xl font-semibold">{memoziedDnG.greet}</h2>

      <section className="text-4xl  *:p-2 *:h-20 *:w-32 *:rounded-md *:flex flex *:justify-center *:bg-[#054954] gap-2 justify-center items-center *:items-center">
        <span>{memoziedDnG.yyyy}</span>
        <span>{memoziedDnG.mm}</span>
        <span>{memoziedDnG.dd}</span>
      </section>
      <Svg />
    </div>
  );
};

export default WelcomePage;
