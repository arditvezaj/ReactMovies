import { Outlet } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
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

const App = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
