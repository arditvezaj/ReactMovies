const Movies = () => {
  const isAuth = localStorage.getItem("token");
  return (
    <>
      {isAuth ? (
        <div className="">
          <h1 className="text-3xl font-bold mt-8 text-center text-violet-800">
            Movies
          </h1>
          <ul className="flex flex-col justify-center items-center mt-6 text-xl">
            <li className="flex flex-col">
              <div>Title: The black Panther</div>
              <div>Author: Chris Brown</div>
              <div>Type: Drama</div>
              <div>Description: It is about a man and a panther</div>
            </li>

            <li className="flex flex-col mt-10">
              <div>Title: Avatar</div>
              <div>Author: Chris Brown</div>
              <div>Type: Drama</div>
              <div>Description: It is about a man and a panther</div>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <p>Please login to see movies!</p>
        </div>
      )}
    </>
  );
};

export default Movies;
