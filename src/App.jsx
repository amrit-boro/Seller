import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
