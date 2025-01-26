import { Suspense } from "react";
import { ExploreLinks } from "./exploreLinks";
import { NavLink } from "react-router-dom";

const Explores = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <main className="flex flex-col  items-center justify-center w-full *:w-full  overflow-hidden *:text-black py-2 gap-[1px]  ">
        {ExploreLinks.map((explore) => {
          return (
            <NavLink
              key={explore.Link}
              to={explore.Link}
              className={
                "flex flex-col  items-center justify-center overflow-hidden *:text-black *:h-[40px]  "
              }
            >
              <div
                className=" flex justify-around items-center  border-transparent  w-[100%] transition-all 
                    border-2 rounded-sm hover:border-[#808080] hover:bg-[rgba(154,109,109,0)] hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
                    "
              >
                <h2 className="w-[60%]">{explore.Header}</h2>
                <img src={explore.icon} className="h-[15px] w-[15px]" alt="" />
              </div>
            </NavLink>
          );
        })}
      </main>
    </Suspense>
  );
};

export default Explores;
