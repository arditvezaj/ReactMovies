import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="px-6 flex justify-between items-center bg-violet-300 text-2xl h-[70px]">
      <NavLink
        to="/"
        className="p-2 rounded-md hover:bg-violet-200 transition-all duration-500 "
      >
        Home
      </NavLink>
      <div className="mr-20 w-[15%] flex justify-between items-center">
        <NavLink
          to="/add-movie"
          className="p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
        >
          Add Movie
        </NavLink>

        <NavLink
          to="/login"
          className="p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default MainNavigation;
