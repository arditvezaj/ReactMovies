import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./components/Movies";
import AddNewMovie from "./pages/AddNewMovie";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import Login from "./pages/Login";

const loginRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Movies /> },
      { path: "/login", element: <Login /> },
    ],
  },
];

const authRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Movies /> },
      { path: "/add-movie", element: <AddNewMovie /> },
    ],
  },
];

const isAuth = localStorage.getItem("token");

const router = createBrowserRouter(isAuth ? authRoutes : loginRoutes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
