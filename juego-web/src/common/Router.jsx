import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import AboutUs from "../pages/AboutUs/AboutUs";
import HomePage from "../pages/HomePage/HomePage";
import Instructions from "../pages/Instructions/Instructions";
import LandingPage from "../pages/LandingPage/LandingPage";
import Layout from "../pages/Layout";
import LoginSignIn from "../pages/LoginSignIn/LoginSignIn";
import SignUp from "../components/User/SignUp/SignUp";
import Game from "../pages/Game/Game";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/home-page",
          element: <HomePage />,
        },
        {
          path: "/instructions",
          element: <Instructions />,
        },
        {
          path: "/login-sign-in",
          element: <LoginSignIn />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
    {
          path: "/game",
          element: <Game />,
        }
      ],
    },
    {
      path: "*",
      loader: () => {
        return redirect("/");
      },
    },
  ]);

  return <RouterProvider router={router} />;
}
