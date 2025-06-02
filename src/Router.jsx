import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";
import HomeLayout from "./Comp/HomeLayout";

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
      
    ],
  },
]);

export default Router;