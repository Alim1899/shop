import Home from "../../components/Home/Home";
import classes from "./Content.module.css";
import Background from "./Background";
import ErrorPage from "../Layout/ErrorPage/ErrorPage";
import LoginHandler from "../../components/LoginComponents/Data/LoginHandler";
import SignHandler from "../../components/LoginComponents/Data/SignHandler";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
const Content = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
        <Route
          path="/login"
          element={<LoginHandler />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/signup"
          element={<SignHandler />}
          errorElement={<ErrorPage />}
        />
      </Route>
    )
  );

  return (
    <div>
      <Background />
      <div className={classes.content}></div>
      <RouterProvider router={router} />
    </div>
  );
};
export default Content;

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"></Link>
        <Link to="/login"></Link>
        <Link to="/signup"></Link>
        <Link to="/error"></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
