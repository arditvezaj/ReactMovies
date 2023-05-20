import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Movies from "../components/Movies";
import AddNewMovie from "./AddNewMovie";
import Error from "./Error";
import Login from "./Login";
import App from "../App";

import axios from "axios";

let title = "";
let author = "";
let type = "";
let description = "";

const dataHandler = (data) => {
  title = data.title;
  author = data.author;
  type = data.type;
  description = data.description;
};

const addMovieHandler = async () => {
  try {
    const { response } = await axios.post(
      "https://react-movies-daa30-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      { title: title, author: author, type: type, description: description },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const isAuth = localStorage.getItem("token");

const loginRoutes = [
  {
    path: "/",
    element: <App />,
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
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Movies /> },
      {
        path: "/add-movie",
        element: (
          <AddNewMovie onPassData={dataHandler} onAddMovie={addMovieHandler} />
        ),
      },
    ],
  },
];

const router = createBrowserRouter(isAuth ? authRoutes : loginRoutes);

const Router = () => {
  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
};

export default Router;
