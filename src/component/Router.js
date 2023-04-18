

import { createBrowserRouter } from "react-router-dom";
import SignIn from "./signIn/SignIn";
import Registration from "./registration/Registration";
import Dashboard from "../pages/Dashboard";
import TransactionForm from "../pages/TransactionForm";
import Card from "./cards/Card";
import Details from "./details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path : "/register",
    element : <Registration />
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/addTransactions",
    element:<TransactionForm/>
  },
  {
    path:"/details/:index",
    element:<Details/>
  }
]);

export default router ;