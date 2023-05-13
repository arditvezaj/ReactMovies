import Input from "../components/Input";
import Button from "../components/Button";

const AddNewMovie = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-6">Add New Movie</h1>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center my-6 text-lg"
      >
        <Input name="Title:" />
        <Input name="Author:" />
        <Input name="Type:" />
        <Input name="Description:" />
        <div className="flex justify-between items-center">
          <Button name="Save" type="submit" />
          <Button name="Reset" type="reset" />
        </div>
      </form>
    </>
  );
};

export default AddNewMovie;
