

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import Registration from "./registration/Registration";
import Navbar from "./Navbar";
import Dashboard from "../pages/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><section className="h-100"><Navbar/><SignIn/></section></>,
  },
  {
    path : "/register",
    element :  <><section className="h-100"><Navbar/><Registration/></section></>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  }
  
]);

export default router ;