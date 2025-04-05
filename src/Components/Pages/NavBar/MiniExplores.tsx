import { connect, travel } from "./svgs";
import { ExploreLinks } from "./exploreLinks";
import { Link } from "react-router-dom";
interface MiniExploresProps {
  setToggle: (toggle: boolean) => void;
}
const MiniExplores: React.FC<MiniExploresProps> = ({ setToggle }) => {
  return (
    <main
      className="*:flex *:flex-col *:justify-center *:items-center fira-font *:mt-3 absolute right-0  top-0 w-full full-screen border border-transparent  
      bg-[#f7f7f7] shadow-[4px_8px_4px_rgba(0,0,0,0.25)] md:hidden flex flex-col justify-around items-center lg:hidden xl:hidden"
    >
      {/* ? Profile Infos */}
      <section>
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHV45JoJoDbt7gBJGKoxSICZD62NOOzD2qCw&s"
          }
          alt="profile picture"
          className="h-[133px] w-[133px] rounded-full"
        />
        <h2
          id="logo-name"
          className=" norican-font text-[37px] font-normal text-right tracking-[3.6px] transition-all md:text-3xl lg:text-4xl underline"
        >
          Dipak Tamang
        </h2>
      </section>

      {/* Explore Links */}
      <section className="">
        <span className="flex items-center gap-1">
          <h2 className="text-[30px] font-semibold">Explore</h2>
          <img src={travel} alt="" />
        </span>
        <ul className="list-none text-center flex flex-col text-xl">
          {ExploreLinks.map((explore) => {
            return (
              <Link
                to={explore.Link}
                key={explore.Link}
                className="hover:font-bold"
              >
                {explore.Header}
              </Link>
            );
          })}
        </ul>
      </section>

      {/* Connect Links */}
      <section className="">
        <span className="flex items-center gap-2">
          <h2 className="text-[30px] font-semibold">Connect</h2>
          <img src={connect} alt="" />
        </span>
        <ul className="flex gap-3 text-xl">
          {["github", "twitter", "gmail"].map((a) => {
            return (
              <a href={a} key={a} className="hover:font-bold px-2 ">
                {a}
              </a>
            );
          })}
        </ul>
      </section>
      <button className="" onClick={() => setToggle(false)}>
        Close
      </button>
    </main>
  );
};

export default MiniExplores;
