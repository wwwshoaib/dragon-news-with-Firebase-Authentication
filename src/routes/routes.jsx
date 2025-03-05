
import { createBrowserRouter } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Layout</h1>,
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