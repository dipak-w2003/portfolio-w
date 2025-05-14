import { Link } from "react-router-dom";
import { BLOGS_COLLECTIONS_INFOS } from "../Blogs/Collections/BLOGS_LIST";
import ProgrammerPNG from "./assets/imgs/Programmer.png";
import { useRef } from "react";
import useScrollReveal from "../../../Hooks/useScrollReveal";
const HomeBlogPag2 = () => {
  const homeBlogPage2Ref = useRef<HTMLDivElement | null>(null);

  // Custom Hook : ScrollReveal
  useScrollReveal(homeBlogPage2Ref);

  // Logo , Title, author(contactLinks), summary
  return (
    <main
      ref={homeBlogPage2Ref}
      data-reveal
      className={` bg-[#ADC6E5] h-[100vh] w-full flex flex-col justify-center gap-3  relative   px-8 pr-14 py-6  border-b-4 `}
    >
      <header className="text-6xl underline font-semibold text-center">
        Top Latest 5 Blogs
      </header>
      {BLOGS_COLLECTIONS_INFOS &&
        BLOGS_COLLECTIONS_INFOS.map((blog) => {
          return (
            <Link
              key={`blog?layout=${blog.id}-${blog.blogName}-${blog.blogPath}`}
              to={`blog/${blog.blogPath}`}
            >
              <section
                data-reveal
                className="my-1 mx-4 h-[150px] bg-white  rounded-md  flex items-center justify-center overflow-hidden   "
              >
                <img
                  src={blog.blogIcon ?? ProgrammerPNG}
                  alt=""
                  className="bg-white rounded-md h-full w-[130px] border"
                />
                <div className="contentWrapper  h-full w-full *:h-1/3 *:w-full  gap-1 justify-center flex flex-col *:p-2">
                  <h4 className="text-2xl">{blog.blogName}</h4>
                  <span className="text-lg">Author : {blog.blogAuthor}</span>
                  <p className="leading-tight text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis blanditiis sequi, recusandae id suscipit expedita
                    eos unde tenetur? Similique tempore molestias itaque id ipsa
                    ratione saepe nam ducimus nemo cumque!
                  </p>
                </div>
              </section>
            </Link>
          );
        })}
    </main>
  );
};

export default HomeBlogPag2;
