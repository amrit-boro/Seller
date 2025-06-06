import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./features/Layout";
import Home from "./features/Home";
import Login from "./features/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
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
