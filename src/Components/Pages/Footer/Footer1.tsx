import React from "react";
import footer1IMG from "./Assets/imgs/footer1.png";
import fireIMG from "./Assets/imgs/Fire.png";
const Footer1: React.FC = () => {
  return (
    <footer
      className={`after-nav-h  w-full relative flex flex-col items-start justify-end text-white`}
    >
      <img
        src={footer1IMG}
        alt=""
        className="h-full w-full absolute -z-1 top-0 object-cover"
      />

      <section className="footer-down-contents relative  h-fit w-full flex py-5  gap-2 flex-col">
        <FooterDownContent_Header />
        <FooterDownContent_Top />
        <FooterDownContent_Bottom />
      </section>
    </footer>
  );
};

export default Footer1;

/*
@ Footer Components will be used separately due to complex design pattern
*/
function FooterDownContent_Header() {
  return (
    <header
      id="fdc-header"
      className="  w-full h-fit  text-4xl xxs:hidden sm:block sm:text-xl sm:p-8 lg:text-2xl xl:text-3xl 2xl:text-4xl font-serif font-bold"
    >
      <h4>Do what makes you happy,</h4>
      <h4>& it will benefit both you and others, Keep improving it</h4>
    </header>
  );
}
function FooterDownContent_Top() {
  return (
    <div
      id="fdc-top"
      className="  w-full h-fit flex justify-around items-center xxs:flex-col gap-3 md:flex-row "
    >
      <h4 className="text-2xl  flex items-center w-fit    ">
        <img src={fireIMG} alt="fire-img" className="object-contain" />
        <b className="mt-2 md:text-lg lg:text-3xl">Dipak Tamang</b>
      </h4>

      {/* Links */}
      <span className="flex justify-evenly w-2/4 xxs:w-full md:w-fit flex-wrap gap-2 items-center ">
        {[
          "gmail@1",
          "gmail@2",
          "linkedIn1",
          "github@",
          "twitter@",
          "whatsapp",
        ].map((e) => {
          return (
            <a
              href={`#${e}`}
              className="  px-2 border-l-[#69B478] border-l-4 h-fit  rounded font-semibold text-lg xxs:text-sm xl:text-lg"
            >
              {e}
            </a>
          );
        })}
      </span>
      <button className="bg-[#DF7589] px-6 py-3 rounded border-none xxs:hidden lg:block">
        Contact
      </button>
    </div>
  );
}
function FooterDownContent_Bottom() {
  return (
    <div
      id="fdc-bottom"
      className="  w-full h-fit  flex items-center justify-around  "
    >
      <span
        id="fdcb-l"
        className="text-xl xxs:w-ful md:w-1/4 *:text-center md:ml-6"
      >
        <h4 className="">CopyrightC2025</h4>
        <h4 className="">dipak2003w@</h4>
      </span>

      <span
        id="fdcb-r"
        className=" flex flex-col gap-2 w-3/4 h-fit  md:px-6 xxs:hidden md:flex"
      >
        <h3 className="text-lg border-b-2 border-b-white w-full py-2">
          Give a call : (977) 98xx01x223
        </h3>

        <div className="flex gap-10 mt-1 ml-2">
          {[1, 2, 3].map((e) => {
            return (
              <b key={e + "99"} className="text-lg">
                lorem
              </b>
            );
          })}
        </div>
      </span>
    </div>
  );
}
