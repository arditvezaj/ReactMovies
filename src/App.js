import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "./components/Movies";
import AddNewMovie from "./pages/AddNewMovie";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Movies /> },
      { path: "add-movie", element: <AddNewMovie /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
