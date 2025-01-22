import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const YoYo_1 = () => {
  const anims = {
    x: 400,
    duration: 2,
    repeat: -1,
    rotate: 360,
  };
  useGSAP(() => {
    // ? yoyo smoothness the reverse or repeat
    // by default yoyo is false
    gsap.to("#box1", { ...anims, background: "cyan" });
    gsap.to("#box2", { ...anims, background: "blue", yoyo: true });
  });
  return (
    <div className="*:m-[10vh] p-8">
      <span className="span">
        <h2>Without YOYO</h2>
        <section
          id="box1"
          className="h-[100px] w-[100px] bg-amber-500"
        ></section>
      </span>

      <span>
        <h2>With YOYO</h2>
        <section
          id="box2"
          className="h-[100px] w-[100px] bg-amber-500"
        ></section>
      </span>
    </div>
  );
};

export default YoYo_1;
