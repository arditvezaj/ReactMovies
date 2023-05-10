import Input from "../components/Input";
import Button from "../components/Button";

const AddNewMovie = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Add New Movie</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center my-6"
      >
        <Input name="Title:" />
        <Input name="Author:" />
        <Input name="Type:" />
        <Input name="Description:" />
        <div className="flex justify-between">
          <Button name="Save" type="submit" />
          <Button name="Reset" type="reset" />
        </div>
      </form>
    </>
  );
};

export default AddNewMovie;
