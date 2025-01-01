import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import ErrorPage from "../pages/ErrorPage";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          Element: <Home />,
        },
        {
          path: "/about",
          Element: <About />,
        },
        {
          path: "/contact",
          Element: <Contact />,
        },
        {
          path: "/products",
          Element: <Products />,
        },
        {
          path: "/cart",
          Element: <Cart />,
        },
        {
          path: "/singleproduct/:id",
          Element: <SingleProduct />,
        },
        {
          path: "*",
          Element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
