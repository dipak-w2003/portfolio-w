import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Timeline_2_demo = () => {
  const img =
    "https://static.vecteezy.com/system/resources/previews/028/627/081/non_2x/watercolor-anime-character-high-quality-illustration-vector-background-photo.jpg";

  // ? Logics & GSAP Here
  const collectQueriesId = [
    "blur-nav-back",
    "logo",
    "a_home",
    "a_about",
    "a_contact",
    "login-btn",
    "footer",
  ];

  const Tl = gsap.timeline();
  useGSAP(() => {
    for (let i = 0; i < collectQueriesId.length; i++) {
      if (collectQueriesId[i] !== "footer") {
        Tl.from(`#${collectQueriesId[i]}`, {
          y: -100,
          duration: 0.5,
          stagger: 2,
        });
      } else {
        Tl.from(`#${collectQueriesId[i]}`, {
          y: 120,
          duration: 0.5,
        });
      }
    }
  });

  return (
    <div className="bg-black h-[100vh] w-full flex text-white items-center *:flex  flex-col p-4 overflow-hidden relative">
      <nav className=" w-full items-center  justify-around h-[70px]  font-serif relative *:z-[88] ">
        <img
          id="logo"
          src={img}
          alt=""
          className="h-[60px] w-[60px] rounded-full object-cover"
        />

        <ul className="flex  gap-16  text-2xl ">
          <li id="a_home">Home</li>
          <li id="a_about">About</li>
          <li id="a_contact">Contact</li>
        </ul>
        <button
          id="login-btn"
          className="text-xl font-bold bg-cyan-900 px-8 rounded-md py-2"
        >
          Login
        </button>
      </nav>

      <footer id="footer" className="absolute bottom-3 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe illum,
        facere cumque assumenda nisi doloremque{" "}
      </footer>
      <div
        id="blur-nav-back"
        className=" absolute top-0 bg-[#3e3b3b7a]  mt-3 h-[80px] w-[80vw] rounded-lg border-cyan-800 border-4 "
      />
    </div>
  );
};

export default Timeline_2_demo;

// ? Demo Explaination
// 1> Intialize styles and elements with proper ids (unique & prevents from overwriting properties)
// 2> collect id in an array like this  from element   const collectQueriesId = ["logo","a_home","a_about","a_contact","login-btn","footer"];
//  -------------> this storing method is use for proper and dyanamic animation (used comman animation)
// 3> use gsap.timeline()
// 4> loop store
// useGSAP(() => {
//   for (let i = 0; i < collectQueriesId.length; i++) {
//     if (collectQueriesId[i] !== "footer") {
//       Tl.from(`#${collectQueriesId[i]}`, {
//         y: -100,
//         duration: 0.5,
//         stagger: 2,
//       });
//     } else {
//       Tl.from(`#${collectQueriesId[i]}`, {
//         y: 120,
//         duration: 0.5,
//       });
//     }
//   }
// });

// Note : This method is used for DRY principle
