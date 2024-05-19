//pages
import Home from "@pages/Home/Home";
import Product from "@pages/Products/Products";
import Categories from "@pages/Categories/Categories";
import AboutUs from "@pages/About-us/AboutUs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Login from "@pages/Login/Login";
import Register from "@pages/Register";
import Error from '@pages/Error/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : 'categories',
        element:<Categories/>
      },
      {
        path : 'products/:prefix',
        element:<Product/>,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path : 'about-us',
        element:<AboutUs/>
      },
      {
        path : 'login',
        element:<Login/>
      },
      {
        path : 'register',
        element:<Register/>
      },
      
    ],
  },
]);

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter