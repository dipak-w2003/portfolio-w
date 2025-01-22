import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Timeline_2 = () => {
  const timeline_ = gsap.timeline();
  const anims = {
    x: 400,
    duration: 2,
    rotate: 360,
    yoyo: true,
  };
  const colors = ["pink", "green", "blue", "yellow", "red"];
  useGSAP(() => {
    for (let i = 0; i < colors.length; i++) {
      timeline_.to(`.box${i + 1}`, { ...anims, background: colors[i] });
    }
  });
  return (
    <>
      <h2 className="text-3xl p-2">TimeLine</h2>
      <div className="*:m-[2vh] p-8 *:h-[60px] *:w-[60px] *:bg-black *:p-4">
        {colors.map((e, _) => {
          return <section className={`box${_ + 1}`}>{_ + 1}</section>;
        })}
      </div>
      <p className="p-5 text-xl">
        Info : Time line helps to run animation one by one
      </p>
      <p className="p-5 text-xl">
        Usecase : show navigation components one by one
      </p>
    </>
  );
};

export default Timeline_2;
