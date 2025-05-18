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
      <header
        className="text-6xl underline font-semibold text-center
      
      xxs:text-2xl
      sm:text-3xl
      md:text-6xl
      "
      >
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
                className="my-1 mx-4 h-[150px] bg-white  rounded-md  flex items-center justify-center overflow-hidden   
                
                xxs:flex-col sm:flex-row
                "
              >
                <img
                  src={blog.blogIcon ?? ProgrammerPNG}
                  alt=""
                  className="bg-white rounded-md h-full 
                  xxs:w-[50px] 
                  sm:w-[130px]
                  "
                />
                <div
                  className="contentWrapper  h-full w-full *:h-1/3 *:w-full  gap-1 justify-center items-center flex  flex-col xxs:*:p-3 sm:*:p-2
                "
                >
                  <h4
                    className="
                  xxs:text-lg xxs:text-center
                 sm:text-left
                 xs:text-xl
                  md:text-2xl
                  lg:text-3xl
                  "
                  >
                    {blog.blogName}
                  </h4>
                  <span
                    className="xxs:text-sm xxs:text-center
                 sm:text-left sm:text-lg
                  "
                  >
                    Author : {blog.blogAuthor}
                  </span>
                  <p className="leading-tight text-sm xxs:hidden sm:block line-clamp-1 ">
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
