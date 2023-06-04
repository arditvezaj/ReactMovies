import { Link } from "react-router-dom";
import Error404 from "../assets/images/error404.avif";

const Error = () => {
  return (
    <div className="text-3xl flex flex-col justify-center items-center">
      <img src={Error404} alt="error" className="mt-[15vh] w-[30rem]" />
      <div className="mt-4">Page Not Found ! Please try a different page</div>
      <Link
        to="/"
        className="bg-yellow-400 hover:bg-yellow-200 p-2 px-4 mt-12 rounded-md"
        type="button"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Error;
