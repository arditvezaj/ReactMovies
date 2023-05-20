import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";

const AddNewMovie = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const [isValid, setIsValid] = useState(true);

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
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
    const response = await axios.post(
      "https://react-movies-daa30-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      [
        {
          title,
          author,
          type,
          description,
        },
      ],
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
      
    setTitle("");
    setAuthor("");
    setType("");
    setDescription("");
  };

  const resetHandler = () => {
    setTitle("");
    setAuthor("");
    setType("");
    setDescription("");
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-6">Add New Movie</h1>
      <form
        onSubmit={submitHandler}
        onReset={resetHandler}
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
          <Button name="Save" type="submit" />
          <Button name="Reset" type="reset" />
        </div>
      </form>
    </>
  );
};

export default AddNewMovie;
