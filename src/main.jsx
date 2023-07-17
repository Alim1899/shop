import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import LoginHandler from "./components/LoginComponents/Data/LoginHandler";
import SignHandler from "./components/LoginComponents/Data/SignHandler";
import ErrorPage from "./UI/Layout/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/login",
    element: <LoginHandler/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/signup",
    element: <SignHandler/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/error",
    element: <ErrorPage/>,
    errorElement:<ErrorPage/>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);