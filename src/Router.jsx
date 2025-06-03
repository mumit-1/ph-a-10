import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
import HomeLayout from "./Comp/HomeLayout";
import Login from "./Comp/Login";

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
      
    ],
  },
]);

export default Router;