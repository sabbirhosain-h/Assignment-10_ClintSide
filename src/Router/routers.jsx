import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "../Components/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import LogIn from "../Pages/LogIn.jsx"
import SignUp from "../Pages/SignUp.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
            path: "/Login",
            Component: LogIn,
        },
        {
          path: "SignUp",
          Component: SignUp,
        }
    ],
  },
]);