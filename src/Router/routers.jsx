import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "../Components/Home.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import LogIn from "../Pages/LogIn.jsx"
import SignUp from "../Pages/SignUp.jsx";
import AllBooks from "../Pages/AllBooks.jsx";
import AddBooks from "../Pages/AddBooks.jsx";
import MyBooks from "../Pages/MyBooks.jsx";
import PrivateRoute from "./privateRoute.jsx";
import BookDetails from "../Pages/BookDetails.jsx";
import Update from "../Pages/Update.jsx";

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
        },
        {
          path: "AllBooks",
          Component: AllBooks,
        },
        {
          path: "AddBooks",
          element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>,
        },
        {
          path: "MyBooks",
          element: <PrivateRoute><MyBooks></MyBooks></PrivateRoute>,
        },
        {
          path : `BookDetails/:id`,
          element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>
        },
        {
          path : `Update/:id`,
          element: <PrivateRoute><Update></Update></PrivateRoute>
        }
    ],
  },
]);