import cloudLeft from "./assets/svgs/SmLeftCloud.svg";
import cloudRight from "./assets/svgs/SmRightCloud.svg";
import moonTop from "./assets/svgs/SmCentreMoon.svg";
import crystal from "./assets/svgs/crystal.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
interface ICodeQuote {
  title?: string;
  paragraph?: string;
}
const HomeLandingPage = () => {
  const CODES_QUOTE: ICodeQuote[] = [
    { title: "Code", paragraph: "Write logic with clarity." },
    { title: "Create", paragraph: "Design intuitive user flows." },
    { title: "Debug", paragraph: "Fix issues with precision." },
    { title: "Test", paragraph: "Validate every critical path." },
    { title: "Deploy", paragraph: "Launch with full confidence." },
    { title: "Scale", paragraph: "Grow without breaking things." },
    { title: "Repeat", paragraph: "Refine, improve, and evolve." },
  ];

  useGSAP(() => {
    const tl_ = gsap.timeline();
    gsap.from("header", {
      y: "-100%",
    });
    gsap.from("#cloud-left", {
      x: "-100%",
    });
    gsap.from("#cloud-right", {
      x: "100%",
    });
    for (let i = 0; i < CODES_QUOTE.length; i++) {
      tl_.from([`#${CODES_QUOTE[i].title}`], {
        scale: 0,
        transition: "all ease-in .1s",
      });
    }
  });

  return (
    <main
      className={`after-nav-h p-4 bg-[#A5AFB8]  relative flex flex-col items-center `}
    >
      <header className="norican-font  text-nowrap text-white drop-shadow-lg mt-[2vw] xxs:text-5xl sm:text-7xl selection:text-[#351c43]">
        Programming
      </header>

      {/* Programming words Cards */}
      <section
        id="prog-cards-container"
        className="container h-fit fira-font flex justify-center items-center  flex-wrap     z-20  p-12 
        xxs:w-[100vw] xxs:gap-6
        sm:gap-10  
        md:gap-y-4 md:gap-x-8
        lg:gap-8
        xl:w-[80vw] xl:gap-10
        2xl:w-[70vw] 2xl:gap-14"
      >
        {CODES_QUOTE.map((code, _) => (
          <div
            id={code.title}
            key={code.title}
            className="prog-card bg-black relative overflow-hidden rounded-[38px]
            xxs:w-[100px] xxs:*:w-[100px] xxs:h-[100px] xxs:*:h-[100px] xxs:rounded-[20px]
            sm:w-[145px] sm:*:w-[145px] sm:h-[130px] sm:*:h-[130px] sm:rounded-[25px]
            md:w-[170px] md:*:w-[170px] md:h-[175px] md:*:h-[175px] md:rounded-[30px]
            lg:w-[200px] lg:*:w-[200px] lg:h-[200px] lg:*:h-[200px] lg:rounded-[38px]
            "
          >
            <div
              className=" rounded-[37.8px] bg-gradient-to-br from-[#351c43] to-[#6573a2] shadow-[145px(239,225,225,0.32)]
               backdrop-blur-[2.5px]  items-center  text-white text-lg font-semibold flex flex-col justify-around
               xxs:rounded-[20px] xxs:-mt-[0]
               sm:rounded-[25px] sm:-mt-[1.2px]
               md:rounded-[30px] md:-mt-[1.6px]
               lg:rounded-[38px]"
            >
              {/* ? Header side */}
              <span className=" h-1/2 w-full relative overflow-hidden">
                <img
                  id="cloud-left"
                  src={cloudLeft}
                  alt="cloudLeft"
                  className="cloud-left absolute top-4   
                  xxs:h-8 xxs:-left-2
                  sm:h-10 sm:w-16
                  md:-left-10 md:h-20 md:w-32"
                />
                <img
                  id="cloud-right"
                  src={cloudRight}
                  alt="cloudRight"
                  className=" absolute top-4   
                  xxs:h-8 xxs:-right-2
                  sm:h-10 sm:w-16
                  md:h-20 md:w-32 md:-right-10"
                />
                <img
                  src={moonTop}
                  alt="moonTop"
                  className="  mx-auto mt-3 xxs:h-5 sm:h-8 "
                />
              </span>

              {/* ? Footer side */}
              <span className=" h-1/2 w-full flex flex-col justify-evenly">
                <article className="flex items-center justify-center h-fit">
                  <h2 className="text-2xl">{code.title}</h2>
                  <img
                    src={crystal}
                    alt="crystal-img"
                    className="xxs:hidden sm:block"
                  />
                </article>
                <article className="flex items-center justify-center h-fit">
                  <p className="text-[15px] xxs:hidden md:block line-clamp-6 leading-tight text-center">
                    {code.paragraph}
                  </p>
                </article>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Clouds Images */}
      <img
        id="cloud-left"
        src={cloudLeft}
        alt="cloudLeft"
        className="h-96 absolute bottom-0 -left-6 xxs:h-40 sm:h-60 lg:h-90 xl:h-96
        "
      />
      <img
        id="cloud-right"
        src={cloudRight}
        alt="cloudRight"
        className="h-96 absolute bottom-0 -right-8
        xxs:h-40
        sm:h-60
        lg:h-90
        xl:h-96
        "
      />
    </main>
  );
};

export default HomeLandingPage;
