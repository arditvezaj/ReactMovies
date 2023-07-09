import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import Movies from "./components/Movies";
import Error from "./pages/Error";
import Login from "./pages/Login";
import RootLayout from "./pages/Root";

import { useRecoilState } from "recoil";
import { isAuthenticated } from "./recoil/atoms/isAuthenticated";

const App = () => {
  const [isAuth, setIsAuth] = useRecoilState(isAuthenticated);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [setIsAuth]);

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
      children: [{ index: true, element: <Movies /> }],
    },
  ];

  const router = createBrowserRouter(isAuth ? routes : loginRoutes);

  return <RouterProvider router={router} />;
};

export default App;
