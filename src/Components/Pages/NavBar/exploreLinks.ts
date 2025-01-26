interface LinksType {
    name: string,
    Header: string,
    Link: string
    icon?: string
}

import { home, about, work, blogs, dashboard } from "./svgs"
export const ExploreLinks: LinksType[] = [
    {
        Header: "Home",
        name: "home",
        Link: "/",
        icon: home
    }
    , {
        Header: "About",
        name: "about",
        Link: "/about",
        icon: about
    },
    {
        Header: "Project",
        name: "project",
        Link: "/project",
        icon: work

    }, {
        Header: "Blogs",
        name: "blogs",
        Link: "/blog",
        icon: blogs

    },
    {
        Header: "Dashboard",
        name: "dashboard",
        Link: "/dashboard",
        icon: dashboard
    }
]