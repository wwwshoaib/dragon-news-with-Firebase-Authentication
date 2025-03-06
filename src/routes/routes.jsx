
import { createBrowserRouter, Navigate } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/Home/CategoryNews";





const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to ={"/category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ( {params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
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