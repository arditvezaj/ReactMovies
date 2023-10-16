import { useEffect, useState } from "react";

import { isAuthenticated } from "../../recoil/atoms/isAuthenticatedenticated";
import MovieItem from "./MovieItem";

import ModalComponent from "../ui/Modal";
import Button from "../ui/Button";
import API from "../../api";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [newModal, setNewModal] = useState(false);

  const getMovies = async () => {
    const response = await API.get(`posts`);
    setMovies(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const addMovie = async () => {
    const response = await API.post(`posts`, {
      title: title,
      author: author,
      body: description,
      userId: Date.now().toString(),
      id: 101,
    });
    console.log(response.data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      title.trim().length === 0 ||
      author.trim().length === 0 ||
      !type ||
      description.trim().length === 0
    ) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    addMovie();
    setNewModal(false);
    setTitle("");
    setAuthor("");
    setType("");
    setDescription("");
  };

  const deleteMovie = async (id) => {
    const response = await API.delete(`posts/${id}`);
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMovies);

    console.log(response);
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between my-8 w-[65%]">
            <h1 className="text-3xl mt-4 ml-3 font-bold  text-violet-800">
              Movies
            </h1>
            <Button
              title="Add Movie"
              variant="primary"
              onClick={() => {
                setNewModal(true);
              }}
            />
          </div>

          <ul className="grid grid-cols-2 gap-6 justify-center items-center mt-2">
            {movies.slice(0, 10).map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
                onDeleteMovie={() => {
                  deleteMovie(movie.id);
                }}
              />
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
      <ModalComponent newModal={newModal} onSubmit={submitHandler} />
    </>
  );
};

export default MoviesList;
