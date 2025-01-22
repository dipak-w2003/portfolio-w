import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ToFrom_0 = () => {
  // ? GSAP Hook
  useGSAP(() => {
    // call gasp and targets (.className,#id,htmlElements)

    // class Target
    // ? to -> forward
    gsap.to(".box1", {
      // x,y axis
      x: 100,
      rotate: 360,
      duration: 2,
      // infinite : -1
      repeat: -1,
      borderRadius: 50,
    });

    // Id target
    gsap.from("#box", {
      x: 100,
      rotate: 360,
      duration: 5,
      repeat: -1,
      borderRadius: 50,
      opacity: 0,
    });

    //   ? Element Target

    gsap.to("h1", {
      y: window.innerHeight / 4,
      x: window.innerWidth,
      repeat: -1,
      duration: 2,
      fontSize: "10rem",
      fontWeight: "bolder",
      color: "green",
    });

    gsap.to("main", {
      background: "brown",
    });
  });
  return (
    <main className="bg-[lightblue] *:p-6 *:m-10 h-[100vh] overflow-hidden">
      <h1>GSAP</h1>
      <div className="box1 h-[100px] w-[100px] bg-cyan-300">
        <h3>TO : Forward</h3>
      </div>
      <div id="box" className="  h-[150px] w-[150px] bg-[yellow]">
        From <br /> : Backward
      </div>
    </main>
  );
};

export default ToFrom_0;
