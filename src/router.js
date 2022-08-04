import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Secret from "./pages/Secret";

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
];
