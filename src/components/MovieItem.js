import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "./Input";
import API from "../api";

const MovieItem = (props) => {
  const [editModal, setEditModal] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  const editMovie = async (id) => {
    const response = await API.put(`posts/${id}`, {
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
    editMovie(props.movie.id);
    setEditModal(false);
    setTitle("");
    setAuthor("");
    setType("");
    setDescription("");
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
    <li
      key={props.movie.id}
      className="flex flex-col justify-center border rounded-md mt-4 w-[60%] p-2"
    >
      <div className="font-bold">{props.movie.title}</div>
      <div>Author: {props.movie.author}</div>
      <div>Type: {props.movie.type}</div>
      <div className="flex">Description: {props.movie.body}</div>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => {
            setEditModal(true);
          }}
          className="p-2 bg-gray-500 w-24 text-white rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => {
            props.onDeleteMovie(props.movie.id);
          }}
          className="p-2 bg-red-500 w-24 text-white rounded-md"
        >
          Delete
        </button>
      </div>

      <Modal
        open={editModal}
        onClose={() => {
          setEditModal(false);
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Movie
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
                type="cancel"
                onClick={() => {
                  setEditModal(false);
                }}
              />
              <Button name="Save" type="submit" />
            </div>
          </form>
        </Box>
      </Modal>
    </li>
  );
};

export default MovieItem;
