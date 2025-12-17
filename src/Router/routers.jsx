import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "../Components/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
        {
            index: true,
            Component: Home,
        }
    ],
  },
]);