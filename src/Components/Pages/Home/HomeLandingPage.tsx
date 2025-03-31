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
    { title: "Repeat", paragraph: "Lorem Ipsum wak" },
  ];
  return (
    <main
      className={`after-nav-h p-4 bg-[#A5AFB8]  relative flex flex-col items-center`}
    >
      <header
        className="norican-font  text-nowrap text-white drop-shadow-lg mt-[2vw]
      
      xs:text-5xl
      sm:text-7xl
      "
      >
        Programming
      </header>

      {/* Programming words Cards */}
      <section
        className="container h-fit fira-font flex justify-center items-center  flex-wrap     z-20  p-12 
        xs:w-[100vw] xs:gap-6
        sm:gap-10  
        md:gap-y-4 md:gap-x-8
        lg:gap-8
        xl:w-[80vw] xl:gap-10
        2xl:w-[70vw] 2xl:gap-14"
      >
        {CODES_QUOTE.map((code, _) => (
          <div
            key={code.title}
            className="bg-black relative overflow-hidden rounded-[38px]
            
            xs:w-[100px] xs:*:w-[100px] xs:h-[100px] xs:*:h-[100px] xs:rounded-[20px]
            sm:w-[145px] sm:*:w-[145px] sm:h-[130px] sm:*:h-[130px] sm:rounded-[25px]
            md:w-[170px] md:*:w-[170px] md:h-[175px] md:*:h-[175px] md:rounded-[30px]
            lg:w-[200px] lg:*:w-[200px] lg:h-[200px] lg:*:h-[200px] lg:rounded-[38px]
            "
          >
            <div
              className=" rounded-[37.8px] bg-gradient-to-br from-[#351c43] to-[#6573a2] shadow-[145px(239,225,225,0.32)]
               backdrop-blur-[2.5px]  items-center  text-white text-lg font-semibold flex flex-col justify-around
               xs:rounded-[20px] xs:-mt-[0]
               sm:rounded-[25px] sm:-mt-[1.2px]
               md:rounded-[30px] md:-mt-[1.6px]
               lg:rounded-[38px]
               
               "
            >
              {/* ? Header side */}
              <span
                className=" h-1/2 w-full relative overflow-hidden 
              
              "
              >
                <img
                  src={cloudLeft}
                  alt="cloudLeft"
                  className=" absolute top-4   
                  xs:h-8 xs:-left-2
                 sm:h-10 sm:w-16
                  md:-left-10 md:h-20 md:w-32"
                />
                <img
                  src={cloudRight}
                  alt="cloudRight"
                  className=" absolute top-4   
                  xs:h-8 xs:-right-2
                  sm:h-10 sm:w-16
                  md:h-20 md:w-32 md:-right-10"
                />
                <img
                  src={moonTop}
                  alt="moonTop"
                  className="  mx-auto mt-3 xs:h-5 sm:h-8 "
                />
              </span>

              {/* ? Footer side */}

              <span className=" h-1/2 w-full flex flex-col justify-evenly">
                <article className="flex items-center justify-center h-fit">
                  <h2 className="text-2xl">{code.title}</h2>
                  <img src={crystal} alt="." className="xs:hidden sm:block" />
                </article>
                <article className="flex items-center justify-center h-fit">
                  <p className="text-[15px] xs:hidden md:block">
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
        src={cloudLeft}
        alt="cloudLeft"
        className="h-96 absolute bottom-0 -left-6
        xs:h-40
        sm:h-60
        lg:h-90
        xl:h-96
        "
      />
      <img
        src={cloudRight}
        alt="cloudRight"
        className="h-96 absolute bottom-0 -right-8
        xs:h-40
        sm:h-60
        lg:h-90
        xl:h-96
        "
      />
    </main>
  );
};

export default HomeLandingPage;
