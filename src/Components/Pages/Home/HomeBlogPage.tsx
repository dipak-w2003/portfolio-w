import { Link } from "react-router-dom";
import computerImg from "./assets/imgs/Computer.png";
import bulletSvg from "./assets/svgs/Bullet.svg";
import { BlogsMarquee } from "../Blogs/BlogsMarquee";
import { useRef } from "react";
import useScrollReveal from "../../../Hooks/useScrollReveal";
import { BLOGS_COLLECTIONS_INFOS } from "../Blogs/Collections/BLOGS_LIST";
const HomeBlogPage = () => {
  const homeAboutRef = useRef<HTMLDivElement | null>(null);
  const latestBlog =
    BLOGS_COLLECTIONS_INFOS[BLOGS_COLLECTIONS_INFOS.length - 1] ?? [];

  useScrollReveal(homeAboutRef);
  return (
    <main
      data-reveal
      ref={homeAboutRef}
      className={` bg-[#ADC6E5] h-[100vh] overflow-hidden flex flex-col items-center justify-center gap-4 relative `}
    >
      {BLOGS_COLLECTIONS_INFOS.length > 0 && <latestBlog.blogElement />}
    </main>
  );
};

export default HomeBlogPage;
