

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import Registration from "./registration/Registration";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path : "/register",
    element : <Registration />
  }
  
]);

export default router ;