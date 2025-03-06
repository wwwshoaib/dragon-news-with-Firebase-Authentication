
import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>
  }, 

  {
    path: "/news",
    element: <h1>News layout</h1>
  }, 
  {
    path: "/auth",
    element: <h1>Login</h1>
  }, 
 
 
]);

export default router;