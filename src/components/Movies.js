import { useEffect, useState } from "react";
import API from "../api";
import Button from "./Button";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const isAuth = localStorage.getItem("token");

  const getMovies = async () => {
    const response = await API.get(`posts`, {
      headers: { "Content-Type": "application/json" },
    });
    setMovies(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = async (id) => {
    const response = await API.delete(`posts/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      {isAuth ? (
        <div className="">
          <h1 className="text-3xl font-bold mt-8 text-center text-violet-800">
            Movies
          </h1>
          <ul className="p-4">
            {movies.slice(0, 10).map((movie) => (
              <li
                key={movie.id}
                className="flex flex-col border rounded-md mt-4 p-2"
              >
                <div className="font-bold"> {movie.title}</div>
                <div>Author: {movie.author}</div>
                <div>Type: {movie.type}</div>
                <div>Description: {movie.body}</div>
                <button className="p-2 bg-black w-24 text-white rounded-md">
                  Delete
                </button>
              </li>
            ))}
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
