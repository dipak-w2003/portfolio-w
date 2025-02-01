import landing_pp from "./imgs/landing_pp.png";
// import gradient_bg from "./imgs/gradient_bg_1.jpg";
const LandingPage = () => {
  return (
    <div
      className={`after-nav-h  flex justify-center flex-col items-center 
   xxs:justify-center xxs:gap-10 
   xs:gap-14
   sm:justify-around sm:items-center
   md:justify-center
   lg:justify-center
    xl:justify-center
    `}
    >
      <img
        src={landing_pp}
        className="h-[282px] w-[282px] object-cover 
        xxs:h-[300px] xxs:w-[300px]
        xs:h-[300px] xs:w-[300px]
        "
        alt="landing_pp"
      />

      <h3
        className="fira-font  w-[50%] font-semibold sm:text-[30px]  text-center tracking-tighter text-wrap selection:text-cyan-600
      md:text-[49px] lg:text-[45px]
      xxs:w-[95%] xxs:text-5xl  
      xs:w-[90%] xs:text-5xl
      sm:text-5xl lg:w-[600px] lg:text-5xl
      "
      >
        Building Code, Solving Problems & sharing innovation
      </h3>
      {/* 
      <img
        src={gradient_bg}
        alt="bg"
        className="absolute -z-10 object-cover top-0 h-full w-full"
      /> */}
    </div>
  );
};

export default LandingPage;
