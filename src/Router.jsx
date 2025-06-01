import { createBrowserRouter } from "react-router-dom";
import Root from "./Comp/Root";

const Router = createBrowserRouter([

  {
    path: "/",
    element: <Root></Root>,
    // errorElement:<Error></Error>,
    children: [
    //   {
    //     path: "/",
    //     element: <Root></Root>,
    
    //   },
      
    ],
  },
]);

export default Router;