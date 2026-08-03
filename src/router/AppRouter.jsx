import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Hijabs from "../pages/Hijabs";
import Niqabs from "../pages/Niqabs";
import Bride from "../pages/Bride";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import Privacy from "../pages/Privacy";
import Shipping from "../pages/Shipping";
import Returns from "../pages/Returns";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "hijabs", element: <Hijabs /> },
      { path: "niqabs", element: <Niqabs /> },
      { path: "bride", element: <Bride /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "favorites", element: <Favorites /> },
      { path: "search", element: <Search /> },
      { path: "privacy", element: <Privacy /> },
      { path: "shipping", element: <Shipping /> },
      { path: "returns", element: <Returns /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
