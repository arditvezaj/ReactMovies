import axios from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const isAuth = localStorage.getItem("token");

  const getMovies = async () => {
    const response = await fetch(
      "https://react-movies-daa30-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
    setMovies(response.data);
    console.log(response);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {isAuth ? (
        <div className="">
          <h1 className="text-3xl font-bold mt-8 text-center text-violet-800">
            Movies
          </h1>
          <ul>
            {/* {movies.map((movie) => (
              <li className="flex flex-col">
                <div>Title: {movie.title}</div>
                <div>Author: {movie.author}</div>
                <div>Type: {movie.type}</div>
                <div>Description: {movie.description}</div>
              </li>
            ))} */}
          </ul>
        </div>
      ) : (
        <div>
          <p className="text-3xl text-center mt-10">
            Please login to see movies!
          </p>
        </div>
      )}
    </>
  );
};

export default Movies;
