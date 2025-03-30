import React from "react";
import cloudLeft from "./assets/svgs/SmLeftCloud.svg";
import cloudRight from "./assets/svgs/SmRightCloud.svg";
import moonTop from "./assets/svgs/SmCentreMoon.svg";
import crystal from "./assets/svgs/crystal.svg";
interface ICodeQuote {
  title?: string;
  paragraph?: string;
}
const HomeLandingPage = () => {
  const CODES_QUOTE: ICodeQuote[] = [
    { title: "Code", paragraph: "Lorem Ipsum wak" },
    { title: "Create", paragraph: "Lorem Ipsum wak" },
    { title: "Debug", paragraph: "Lorem Ipsum wak" },
    { title: "Test", paragraph: "Lorem Ipsum wak" },
    { title: "Deploy", paragraph: "Lorem Ipsum wak" },
    { title: "Scale", paragraph: "Lorem Ipsum wak" },
    { title: "Test", paragraph: "Lorem Ipsum wak" },
  ];
  return (
    <main
      className={`after-nav-h p-4 bg-[#A5AFB8]  relative flex flex-col items-center`}
    >
      <header className="norican-font text-7xl text-nowrap text-white drop-shadow-lg mt-[2vw]">
        Programming
      </header>

      {/* Programming words Cards */}
      <section className="container h-fit fira-font flex w-[70%] flex-wrap gap-x-9 mt-[2vw] gap-y-12  z-20 gap-4 p-12 justify-center items-center">
        {CODES_QUOTE.map((code, _) => (
          <div
            key={code.title}
            className="bg-black relative overflow-hidden rounded-[38px] w-[200px]  h-[200px] *:w-[100%] *:h-[99.7%] "
          >
            <div
              className="-mt-[1.6px] rounded-[37.8px] bg-gradient-to-br from-[#351c43] to-[#6573a2] shadow-[inset_0px_3px_4px_rgba(239,225,225,0.32)]
               backdrop-blur-[2.5px]  items-center  text-white text-lg font-semibold flex flex-col justify-around"
            >
              {/* ? Header side */}
              <span
                className=" h-1/2 w-full relative overflow-hidden 
              
              "
              >
                <img
                  src={cloudLeft}
                  alt="cloudLeft"
                  className="h-20 w-32 absolute top-4 -left-12"
                />
                <img
                  src={cloudRight}
                  alt="cloudRight"
                  className="h-20 w-32 absolute top-4 -right-12"
                />
                <img
                  src={moonTop}
                  alt="moonTop"
                  className=" h-8  mx-auto mt-3 "
                />
              </span>

              {/* ? Footer side */}

              <span className=" h-1/2 w-full flex flex-col justify-evenly">
                <article className="flex items-center justify-center h-fit">
                  <h2 className="text-2xl">{code.title}</h2>
                  <img src={crystal} className="text-sm" alt="." />
                </article>
                <article className="flex items-center justify-center h-fit">
                  <p className="text-lg">{code.paragraph}</p>
                </article>
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Clouds Images */}
      <img
        src={cloudLeft}
        alt="cloudLeft"
        className="h-96 absolute bottom-0 -left-6"
      />
      <img
        src={cloudRight}
        alt="cloudRight"
        className="h-96 absolute bottom-0 -right-8"
      />
    </main>
  );
};

export default HomeLandingPage;
