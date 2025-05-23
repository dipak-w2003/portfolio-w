import { Suspense, useRef, useState } from "react";
import fireIMG from "./assets/imgs/Fire.png";
import cloverSVG from "./assets/svgs/clover.svg";
import { CARDS_DETAILS, colorStack } from "./ProjectCards";
import useScrollReveal from "../../../Hooks/useScrollReveal";

export default function HomeProjectPage() {
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const homeProjectRef = useRef<HTMLDivElement | null>(null);

  // Custom Hook : ScrollReveal
  useScrollReveal(homeProjectRef);
  const handleMultiSelection = (activateIdx: string) => {
    setSelectedCards((prevCards) => {
      if (prevCards.includes(activateIdx)) {
        return prevCards.filter((card) => card !== activateIdx);
      } else {
        return [...prevCards, activateIdx];
      }
    });
  };

  return (
    <main
      data-reveal
      className="min-h-[100vh] w-full bg-[#131E30] flex flex-col justify-center items-center gap-9 overflow-x-hidden"
      ref={homeProjectRef}
    >
      <header
        className="text-5xl text-white flex justify-center items-center gap-2 mt-4
      xxs:text-4xl
      sm:text-5xl
      "
      >
        <h2 className="">Project Page</h2>
        <img
          src={cloverSVG}
          alt="clover-project-svg-logo"
          className="xxs:hidden xs:block xs:h-14"
        />
      </header>

      {/* ? Cards */}
      <section className="p-6 flex  flex-wrap justify-center  gap-5  h-fit ">
        {CARDS_DETAILS.length > 0 &&
          CARDS_DETAILS.map((card, index) => {
            return (
              <Suspense
                key={`${card.projectName}-${card.projectName}-${card.id}:${index}`}
                fallback={
                  <div className="h-[280px] w-[350px] bg-white text-3xl">
                    {card.projectName}
                  </div>
                }
              >
                <div
                  key={`${card.projectName}-${card.projectName}-${card.id}:${index}`}
                  className="card h-[280px] w-[350px] flex flex-col justify-between transition-all *:transition-all  bg-white rounded-md relative
                  xxs:h-[250px] xxs:w-[250px]
                  xs:w-[350px]
                  sm:h-[280px] sm:w-[350px]
                  "
                  data-reveal
                >
                  {/* First Heading */}
                  <TopHeading
                    data-reveal
                    index={index}
                    projectName={card.projectName}
                  />

                  {/* middle content */}
                  <section
                    className="project-indicator-wrapper flex justify-around w-full 
                  xxs:mt-10
                  sm:mt-2
                  
                  
                  "
                  >
                    <div className="project-indicator-wrapper flex gap-4 items-center">
                      <span className="project-status-wrapper-circle w-6 h-6 bg-gray-200 shadow rounded-full *:rounded-full overflow-hidden flex justify-center items-center">
                        <button
                          title={`project::${card.projectStatus}`}
                          className={`project-status-color border-0 ${
                            colorStack[card.projectStatus]
                          } w-2/4 h-2/4 text bg-black `}
                        />
                      </span>
                      <button
                        onClick={() =>
                          handleMultiSelection(
                            `${card.id}-${card.projectName}-${card.projectStatus}`
                          )
                        }
                        type="button"
                        className="w-6 h-6 rounded-full bg-[#234F76] text-md text-white font-semibold text-center"
                      >
                        i
                      </button>
                    </div>

                    <button className="bg-[#234F76] border-none text-lg px-5 py-1 text-white rounded">
                      <a href={`#${card.link}`} target="_blank">
                        Visit
                      </a>
                    </button>
                  </section>

                  {/* bottom content -> It will include tech percenatge of code line used accordingly like github does */}
                  <section className="project-indicator-wrapper flex justify-around w-full shadow-md shadow-black h-2/4 overflow-hidden rounded-b">
                    <h4 className="text-xl underline">Stats</h4>
                  </section>
                  {/* Drawer */}
                  {selectedCards.includes(
                    `${card.id}-${card.projectName}-${card.projectStatus}`
                  ) && (
                    <div
                      data-reveal
                      className="drawer transition-all ease-linear absolute z-10 top-0 h-full w-full bg-[#131E30] -right-0 rounded-r  shadow-[#d1d5db] shadow-inner  "
                    >
                      {/* Button */}
                      <button
                        className="bg-white px-4 py-2 text-2xl rounded-full "
                        onClick={() =>
                          handleMultiSelection(
                            `${card.id}-${card.projectName}-${card.projectStatus}`
                          )
                        }
                      >
                        {" "}
                        X
                      </button>
                    </div>
                  )}
                </div>
              </Suspense>
            );
          })}
      </section>
    </main>
  );
}

function TopHeading(prop: { projectName: string; index: number }) {
  return (
    <article
      className="flex  items-center  p-2 h-1/4  gap-5 border-b-2    shadow-xs shadow-black  relative 
    
    xxs:flex-col 
    sm:flex-row 
    "
    >
      <img
        className="bg-[#131E30] h-14 w-14 object-cover rounded-lg *:
        xxs:h-10 xxs:w-10
        sm:h-12 sm:w-12
        "
        src={fireIMG}
        alt={`${prop.projectName}-img`}
      />
      <h4 className="text-2xl font-semibold font-mono">{prop.projectName}</h4>

      <span className="absolute -right-2 -top-2 rounded-full bg-gray-300 flex justify-center items-center text-center h-9 w-9 overflow-hidden z-50 border-b-2 border-white  ">
        <pre className="m-auto text-4xl font-semibold">{prop.index + 1}</pre>
      </span>
    </article>
  );
}
