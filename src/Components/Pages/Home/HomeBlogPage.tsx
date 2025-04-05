import { Link } from "react-router-dom";
import computerImg from "./assets/imgs/Computer.png";
import bulletSvg from "./assets/svgs/Bullet.svg";
import { BlogsMarquee } from "../Blogs/BlogsMarquee";
const HomeBlogPage = () => {
  const POINTS_BLOG_AI_CODINGS = [
    "Manual coding vs. AI-generated code completion",
    "Searching for errors manually vs. AI-assisted debugging",
    "Human-driven code reviews vs. AI-suggested optimizations",
    "Reading documentation vs. Instant AI explanations",
    "Writing test cases manually vs. AI-generated tests",
  ];

  return (
    <main
      className={` bg-[#ADC6E5] after-nav-h flex flex-col items-center justify-center gap-4 relative `}
    >
      {/* ? Blog Marquee */}
      <BlogsMarquee />
      <header className="  flex flex-col justify-center items-center xxs:p-2 sm:p-2  ">
        <h1 className=" text-center  underline   xxs:text-xl sm:text-3xl xl:text-5xl">
          Become a 10x developer with an AI
        </h1>
        <article
          className=" w-3/4    tracking-tighter 
        xxs:text-sm xxs:p-2 xxs:w-full xxs:text-center
        sm:text-lg
        md:text-xl  
        xl:text-2xl    
        "
        >
          AI tools like Deepseek,GitHub Copilot, and Tabnine can help developers
          become 10x more productive by automating repetitive tasks, debugging
          faster, and enhancing code quality.
        </article>
      </header>
      {/* ? content section */}
      <section className=" h-fit    items-center gap-4   flex xxs:flex-col md:flex-row  ">
        {/* content - 1  */}
        <div className="wrap-img xxs:h-[45vw] sm:h-[25vw]  ">
          <img src={computerImg} alt="computerImg" className="h-full" />
        </div>

        {/* content - 2 ARTICLES */}
        <div
          className=" bg-white  right-0  xxs:hidden sm:block sm:p-3 line-clamp-6 rounded-sm
          lg:p-8
        "
        >
          <h3 className="text-2xl mb-2 xxs:text-lg sm:text-xl text-center">
            Traditional Methods vs AI-Powered Workflows
          </h3>

          <ul className=" ">
            {POINTS_BLOG_AI_CODINGS.map((points, i) => {
              return (
                <li key={`${points}:${i}`} className="flex gap-3 my-2  w-fit ">
                  <img src={bulletSvg} alt="" className="" />
                  <pre>{points}</pre>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* Footer */}
      <footer
        className="flex justify-center items-center absolute bottom-0 bg-[#ffff] w-full
        xxs:p-2 
        sm:p-4 sm:gap-4
        md:p-2 md:gap-1

        lg:p-4 lg:gap-10
      
      "
      >
        <h3 className="font-semibold  xxs:hidden sm:block sm:text-sm md:text-xl lg:text-2xl">
          Start using AI today and become a 10x developer!
        </h3>
        <button className="bg-[#3785D8] rounded border-none text-white font-semibold px-6  w-fit py-4">
          <Link to={"/blog"}>Visit Blogs</Link>
        </button>
      </footer>
    </main>
  );
};

export default HomeBlogPage;
