import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import SingleProduct from "../pages/SingleProduct";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../components/Layout/Layout";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
