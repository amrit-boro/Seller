import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./features/Home";
import Login from "./features/Login";
import UserProfile from "./features/SellerProfile/UserProfile";
import SignUp from "./SignUp";
import NomalUser from "./features/NormalUser/NormalUser";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/normaluser",
    element: <NomalUser />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
