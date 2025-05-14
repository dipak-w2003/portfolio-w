import fireIMG from "./assets/imgs/Fire.png";

interface I_CARDS {
  id: number;
  projectName: string;
  descriptions: string;
  desPoints?: string[];
  link: string;
  // Addons
  img?: string;
  // development & active : green , maintenance : yellow & down:red &  (upcoming project) : black
  projectStatus: "development" | "maintenance" | "active" | "down" | "upcoming";
  // Addons from GIT-Hub
  gitStats?: {
    techStacks: [
      {
        lang: string;
        totalLinesCode: number | string;
      }
    ];
    latestCommitMsg: string | any;
    totalCommit: number;
  };
}

export const CARDS_DETAILS: I_CARDS[] = [
  {
    id: 1,
    projectName: "Manjaro Clone",
    descriptions:
      "Simple Arch Linux Manjaro System Conceptual Frontend Develop",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "development",
    link: "xyz",
  },
  {
    id: 2,
    projectName: "Portfolio",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "maintenance",
    link: "xyz",
  },
  {
    id: 3,
    projectName: "React TSX Docs",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "down",
    link: "xyz",
  },
  {
    id: 4,
    projectName: "Lorem Ipsum",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "down",
    link: "xyz",
  },
  {
    id: 5,
    projectName: "upcoming Ipsum",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "upcoming",
    link: "xyz",
  },
  {
    id: 6,
    projectName: "upcoming Ipsum 2",
    descriptions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    desPoints: ["Free try.", "Apps to discover"],
    img: fireIMG,
    projectStatus: "upcoming",
    link: "xyz",
  },
];
export const colorStack = {
  development: "bg-emerald-500",
  active: "bg-emerald-500",
  maintenance: "bg-yellow-500",
  down: "bg-red-700",
  upcoming: "bg-black",
};
