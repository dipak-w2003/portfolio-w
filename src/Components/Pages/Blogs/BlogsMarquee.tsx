import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BLOGS_COLLECTIONS_INFOS } from "./Collections/BLOGS_LIST";
import { Link } from "react-router-dom";
export function BlogsMarquee() {
  useGSAP(() => {
    gsap.to("#blogs-marquee ul", {
      x: "100%",
      duration: 10,
      // yoyo: true,
      repeat: -1,
    });
  });

  return (
    <section
      id="blogs-marquee"
      className="blogs-marquee flex absolute top-0 h-fit shadow-md w-full"
    >
      <ul className="w-[500%]   flex  justify-evenly items-center gap-8">
        {BLOGS_COLLECTIONS_INFOS &&
          BLOGS_COLLECTIONS_INFOS.map((blog) => {
            return (
              <li
                key={`${blog.blogName}?${blog.blogPath}`}
                className="p-2 px-4 font-semibold "
              >
                <Link to={`blog/${blog.blogPath}`}>{blog.blogName}</Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
