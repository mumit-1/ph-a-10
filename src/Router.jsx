import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
import HomeLayout from "./Comp/HomeLayout";
import Login from "./Comp/Login";
import SignUp from "./Comp/SignUp";
import AddProduct from "./Comp/AddProduct";
import Check from "./Comp/Check";
import Detail from "./Comp/Detail";

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
    
      },
      {
        path: "/login",
        element: <Login></Login>,
    
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
    
      },
      {
        path: "/addProduct",
        element: <Check><AddProduct></AddProduct></Check>,
    
      },
      {
        path: "/product/:id",
        element: <Detail></Detail>,
          loader: ({ params }) =>
          fetch(`http://localhost:5100/product/${params.id}`),
      },
      
    ],
  },
]);

export default Router;