import React, { useEffect } from "react";
import MiniBar from "./MiniBar/MiniBar";
import FloatingHead from "./FloatingHead";
import Toggle from "./toggle";
const NavBar = () => {
  const { setTrue, setFalse, toggle, setToggling } = Toggle();
  // ? for ease to use floating nav bar cause every time moving cursor in order open might get bored
  // ? so fix that problem we can open now with key combination
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        setToggling();
        event.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <main className="flex roboto-font  w-fit space-x-3 items-center *:cursor-pointer">
      {toggle ? (
        <MiniBar ToggleTorF={setFalse} />
      ) : (
        <FloatingHead ToggleTorF={setTrue} />
      )}
    </main>
  );
};

export default NavBar;
