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
import Page from "./page/Page";
import {FlintHill2025, Georgia2025, Mvso2025, Season2024, September2024} from "./components/Blogs";
import login from "./pages/login";



// pages and paths
const pages = [
    {
        title: "Page Not Found | Woodson Science Olympiad",
        start: "Error",
        highlight: "404",
        after: "",
        subtitle: "Page not found",
        path: "/404",
        components: page404
    },
    {
        title: "Our Team | Woodson Science Olympiad",
        start: "Our",
        highlight: "Team",
        after: "",
        subtitle: "Learn about the coolest Science Olympiad team in VA",
        path: "/team",
        components: team
    },
    {
        title: "Leadership | Woodson Science Olympiad",
        start: "Our",
        highlight: "Leadership",
        after: "",
        subtitle: "Meet our amazing officers!",
        path: "/leadership",
        components: leadership
    },
    {
        title: "Blog | Woodson Science Olympiad",
        start: "Our",
        highlight: "Blog",
        after: "",
        subtitle: "Learn about the club and what we do.",
        path: "/blog",
        components: blog
    },
    {
        title: "Tryouts | Woodson Science Olympiad",
        start: "WSO",
        highlight: "Tryouts",
        after: "",
        subtitle: "Learn about WSO's tryouts system.",
        path: "/tryouts",
        components: tryouts
    },
    {
        title: "Contribute | Woodson Science Olympiad",
        start: "",
        highlight: "Contribute",
        after: "to WSO",
        subtitle: "",
        path: "/contribute",
        components: contribute
    },
];


new Page({title: "Woodson Science Olympiad", path: "/", components: home})

// render pages
if (pages.length > 0) {
    // Render the rest as DefaultPage
    for (const item of pages) {
        new DefaultPage({
            title: item.title,
            start: item.start,
            highlight: item.highlight,
            after: item.after,
            subtitle: item.subtitle,
            path: item.path,
            components: item.components
        });
    }
}


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

export {}
