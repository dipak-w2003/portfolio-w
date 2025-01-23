import React, { lazy, Suspense, useEffect, useState } from "react";

const MiniBar = lazy(() => import("./MiniBar/MiniBar"));
const FloatingHead = lazy(() => import("./FloatingHead"));
import Toggle from "./toggle";
import DraggableComponent from "./DragMe";
import { AiOutlineReload } from "react-icons/ai";
const NavBar: React.FC = () => {
  const { setTrue, setFalse, toggle, setToggling } = Toggle();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // TODO : this code is written for mobile toggle compatiability with swipping so fix problem
  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart !== null) {
      const swipeDistance = e.changedTouches[0].clientX - touchStart;
      if (swipeDistance > 1) {
        setTrue();
        // Swipe right
      } else if (swipeDistance < -1) {
        setFalse();
        // Swipe left
      }
    }
  };

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
  }, [setToggling]);

  return (
    <Suspense
      fallback={
        <AiOutlineReload className="fixed text-gray-600 animate-spin" />
      }
    >
      <DraggableComponent>
        <main
          className="flex roboto-font w-fit space-x-3 items-center *:cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {toggle ? (
            <MiniBar ToggleTorF={setFalse} />
          ) : (
            <FloatingHead ToggleTorF={setTrue} />
          )}
        </main>
      </DraggableComponent>
    </Suspense>
  );
};

export default NavBar;
