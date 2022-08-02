import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Secret from "./pages/Secret";

export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/contact",
    component: Contact,
    exact: true,
  },
  {
    path: "/secret",
    component: Secret,
    exact: true,
  },
];
