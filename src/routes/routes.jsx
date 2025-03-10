
import { createBrowserRouter, Navigate } from "react-router";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/Home/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Home/Login";
import Register from "../pages/Home/Register";





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
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
     
    ]
  }, 
 
 
]);

export default router;