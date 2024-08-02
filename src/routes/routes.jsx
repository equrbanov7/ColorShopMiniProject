import { createBrowserRouter } from "react-router-dom";
import ClinetLayout from "../pages/client";
import ClientHome from "../pages/client/Home";

export const routes = createBrowserRouter([
    // Admin Side
    // {
    //   path: "/admin",
    //   element: <AdminLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <AdminHomePage />,
    //     },
    //     {
    //       path: "dashboard",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "addproduct",
    //       element: <AddProduct />,
    //     },
    //     {
    //       path: "products",
    //       element: <AdminProducts />,
    //     },
    //   ],
    // },
  
    // Client Side
    {
      path: "/",
      element: <ClinetLayout />,
      children: [
        {
          index: true,
          element: <ClientHome />,
        },
        // {
        //   path: "products",
        //   element: <Products />,
        // },
        // {
        //   path: "products/:productId",
        //   element: <ProductInfo />,
        // },
       
      ],
    },
  ]);
  