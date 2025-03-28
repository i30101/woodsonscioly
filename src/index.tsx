/**
 * @author Andrew Kim
 * @since 15 March 2025
 * @version 3.0.0
 *
 * Index page
 * Also renders all pages
 */


// external libraries
import React from "react";
import ReactDOM from "react-dom/client";


// local
import App from "./App"
import DefaultPage from "./page/DefaultPage";


// content of pages
import home from "./pages/home";
import page404 from "./pages/404";
import team from "./pages/team";
import leadership from "./pages/leadership";
import blog from "./pages/blog";
import tryouts from "./pages/tryouts";
import contribute from "./pages/contribute";



// pages and paths
const pages = [
    {
        title: "Woodson Science Olympiad",
        path: "/",
        components: home
    },
    {
        title: "Page Not Found | Woodson Science Olympiad",
        path: "/404",
        components: page404
    },
    {
        title: "Our Team | Woodson Science Olympiad",
        path: "/team",
        components: team
    },
    {
        title: "Leadership | Woodson Science Olympiad",
        path: "/leadership",
        components: leadership
    },
    {
        title: "Blog | Woodson Science Olympiad",
        path: "/blog",
        components: blog
    },
    {
        title: "Tryouts | Woodson Science Olympiad",
        path: "/tryouts",
        components: tryouts
    },
    {
        title: "Contribute | Woodson Science Olympiad",
        path: "/contribute",
        components: contribute
    }
];


// render pages
for (const item of pages) {
    new DefaultPage({
        title: item.title,
        path: item.path,
        components: item.components
    })
}






const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

export {}
