import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "./Input";
import API from "../api";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [newModal, setNewModal] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isValid, setIsValid] = useState(true);
  const isAuth = localStorage.getItem("token");

  const getMovies = async () => {
    const response = await API.get(`posts`);
    setMovies(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "6px",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {isAuth ? (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between mt-8 w-[60%]">
            <h1 className="text-3xl mt-4 ml-3 font-bold  text-violet-800">
              Movies
            </h1>
            <Button
              name="Add Movie"
              onClick={() => {
                setNewModal(true);
              }}
            ></Button>
          </div>

          <ul className="flex flex-col justify-center items-center p-4 ">
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
      <Modal
        open={newModal}
        onClose={() => {
          setNewModal(false);
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Movie
          </Typography>
          <form
            onSubmit={submitHandler}
            className="flex flex-col justify-center items-center my-6 text-lg"
          >
            {!isValid && (
              <p className="text-red-500 bg-red-100 p-4 rounded-md">
                Please fill all sections!
              </p>
            )}
            <Input
              name="Title:"
              type="text"
              value={title}
              onChange={handleChange(setTitle)}
            />
            <Input
              name="Author:"
              type="text"
              value={author}
              onChange={handleChange(setAuthor)}
            />
            <Input type="text" value={type} onChange={handleChange(setType)} />
            <div className="flex flex-col">
              <label className="mt-5">Description:</label>
              <textarea
                className="rounded-md border"
                value={description}
                onChange={handleChange(setDescription)}
              ></textarea>
            </div>
            <div className="flex justify-between items-center">
              <Button
                name="Cancel"
                onClick={() => {
                  setNewModal(false);
                }}
              />
              <Button name="Save" type="submit" />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Movies;
