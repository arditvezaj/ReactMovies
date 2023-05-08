const AddNewMovie = () => {
  return (
    <>
      <h2>Add New Movie</h2>
      <form>
        <label>Title:</label>
        <input type="text" />
        <label>Author:</label>
        <input type="text" />
        <label>Type:</label>
        <input type="text" />
        <label>Description:</label>
        <input type="text" />
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
};

export default AddNewMovie;
