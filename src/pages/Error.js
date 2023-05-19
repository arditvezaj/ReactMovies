import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-3xl mt-[40vh] flex flex-col justify-center items-center">
      <div>Error 404!</div>
      <div>Page Not Found ! Please try a different page</div>
      <Link
        to="/"
        className="bg-green-300 hover:bg-green-200 p-2 px-4 mt-6 rounded-md"
        type="button"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Error;
