import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./components/Movies";
import AddNewMovie from "./pages/AddNewMovie";
import Error from "./pages/Error";
import Login from "./pages/Login";
import RootLayout from "./pages/Root";

const App = () => {
  const isAuth = localStorage.getItem("token");

  const loginRoutes = [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Movies /> },
        { path: "login", element: <Login /> },
      ],
    },
  ];

  const routes = [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Movies /> },
        { path: "add-movie", element: <AddNewMovie /> },
      ],
    },
  ];

  const router = createBrowserRouter(isAuth ? routes : loginRoutes);

  return <RouterProvider router={router} />;
};

export default App;
