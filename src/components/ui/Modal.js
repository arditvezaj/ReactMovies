import { useState } from "react";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Input from "./Input";
import Button from "./Button";

const ModalComponent = ({ newModal, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
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
    <Modal
      open={newModal}
      onClose={() => {
        newModal = false
      }}
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Movie
        </Typography>
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center my-6 text-lg"
        >
          {!isValid && (
            <p className="text-red-500 bg-red-100 p-4 rounded-md">
              Please fill all sections!
            </p>
          )}
          <Input
            label="Title:"
            type="text"
            value={title}
            onChange={handleChange(setTitle)}
          />
          <Input
            label="Author:"
            type="text"
            value={author}
            onChange={handleChange(setAuthor)}
          />
          <Input
            label="Type:"
            type="text"
            value={type}
            onChange={handleChange(setType)}
          />
          <div className="w-full flex flex-col">
            <label className="mt-5 mb-1">Description:</label>
            <textarea
              resize
              rows={4}
              className="rounded-md border"
              value={description}
              onChange={handleChange(setDescription)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <Button
              title="Cancel"
              variant="secondary"
              onClick={() => {
                newModal = false
              }}
            />
            <Button title="Save" variant="primary" type="submit" />
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
