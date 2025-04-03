import { Link } from "react-router-dom";
import computerImg from "./assets/imgs/Computer.png";
import bulletSvg from "./assets/svgs/Bullet.svg";
import chatGTPSvg from "./assets/svgs/ChatGpt.svg";
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
      className={` bg-[#ADC6E5] h-[100vh] flex flex-col items-center justify-center gap-4 relative `}
    >
      <header className=" p-6 flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-center  underline">
          Become a 10x developer with an AI
        </h1>
        <article className=" w-3/4  p-5 text-xl tracking-tighter">
          AI tools like Deepseek,GitHub Copilot, and Tabnine can help developers
          become 10x more productive by automating repetitive tasks, debugging
          faster, and enhancing code quality.
        </article>
      </header>

      {/* ? content section */}
      <section className=" h-fit  flex  items-center gap-4 ">
        {/* content - 1  */}
        <div className="wrap-img h-[25vw]">
          <img src={computerImg} alt="computerImg" className="h-full" />
        </div>

        {/* content - 2 ARTICLES */}
        <div className="p-8 bg-white  right-0">
          <h3 className="text-2xl mb-7 ">
            Traditional Methods vs AI-Powered Workflows
          </h3>

          <ul className="text-lg">
            {POINTS_BLOG_AI_CODINGS.map((points, i) => {
              return (
                <li key={`${points}:${i}`} className="flex gap-3 my-1">
                  <img src={bulletSvg} alt="" />
                  <pre>{points}</pre>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-center items-center absolute bottom-0 bg-[#ffff] w-full p-4 gap-4">
        <h3 className="font-semibold">
          Start using AI today and become a 10x developer!{" "}
        </h3>
        <button className="bg-[#3785D8] rounded border-none text-white font-semibold px-6  w-fit py-4">
          <Link to={"/blog"}>Visit Blogs</Link>
        </button>
      </footer>
    </main>
  );
};

export default HomeBlogPage;

function AsideMenuTabs() {
  const TAB_APPS = [{}];
  return <section className="flex flex-col"></section>;
}
