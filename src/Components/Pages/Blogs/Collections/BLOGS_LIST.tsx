import React from "react";

// ? BLOGS Components
import VibeCoding_Blog from "./1-vibe-coding/VibeCoding_Blog";
import LogicBuilding_Blog from "./2-logic-building/LogicBuilding_Blog";
interface BlogsCollections {
  blogName: string;
  blogPath: string;
  blogElement: React.FC;
}

export const BLOGS_COLLECTIONS_INFOS: BlogsCollections[] = [
  {
    blogName: "Vibe Coding",
    blogPath: "vibe-coding",
    blogElement: VibeCoding_Blog,
  },
  {
    blogName: "Logic Building",
    blogPath: "logic-building",
    blogElement: LogicBuilding_Blog,
  },
];
