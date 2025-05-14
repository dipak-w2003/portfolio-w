/* @Idea
 * For the blog showing, we will collect those pages/component which can be shown as per requirement for now the blog-pages will be editted manually which will provide some features
 * 1. HomeBlog page will show only latest blog page which will be last index of collection
 * 2. For now we will show BlogPage
 */

import React, { lazy } from "react";
// ? BLOGS Components
const VibeCoding_Blog = lazy(() => import("./1-vibe-coding/VibeCoding_Blog"));
const LogicBuilding_Blog = lazy(
  () => import("./2-logic-building/LogicBuilding_Blog")
);
const Ai10xDeveloper_Blog = lazy(
  () => import("./3-10x-developer-ai/Ai_10X_Developer_Blog")
);

// Blog Assets
import defaultBlogIconImg from "../Assets/imgs/Computer.png";

// Blog Collection order data types
export interface BlogsCollections {
  id: number;
  blogName: string;
  blogPath: string;
  blogElement: React.FC;
  // ? addons
  blogIcon?: string;
  blogAuthor?: string;
  blogSummarization?: string;
  // for future state management
  blogActivation?: boolean;
}

export const BLOGS_COLLECTIONS_INFOS: BlogsCollections[] = [
  {
    id: 1,
    blogName: "Vibe Coding",
    blogPath: "vibe-coding",
    blogAuthor: "unknown@xyx",
    blogIcon: defaultBlogIconImg,
    blogElement: VibeCoding_Blog,
  },
  {
    id: 2,
    blogName: "Logic Building",
    blogPath: "logic-building",
    blogAuthor: "tera@xyx",
    blogIcon: defaultBlogIconImg,
    blogElement: LogicBuilding_Blog,
  },
  {
    id: 3,
    blogName: "10x Developer Ai",
    blogPath: "10x-developer-ai",
    blogAuthor: "hallowen@xyx",
    // blogIcon: defaultBlogIconImg,
    blogElement: Ai10xDeveloper_Blog,
  },
];
