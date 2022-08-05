import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Secret from "./pages/Secret";

// const Home = React.lazy(() => import("./pages/Home"));

export default [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/secret",
    element: Secret,
  },
  {
    path: "/post/:id",
    element: Post,
  },
  {
    path: "*",
    element: NotFound,
  },
];
