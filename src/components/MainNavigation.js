import { NavLink, useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="px-6 flex justify-between items-center bg-violet-300 text-2xl h-[70px]">
      <NavLink
        to="/"
        className="p-2 rounded-md hover:bg-violet-200 transition-all duration-500 "
      >
        Home
      </NavLink>

      {isAuth ? (
        <div className="mr-20 w-[25%] flex justify-between items-center">
          <NavLink
            to="/add-movie"
            className="p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
          >
            Add Movie
          </NavLink>
          <div
            onClick={logoutHandler}
            className="cursor-pointer p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
          >
            Logout
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="mr-20 p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default MainNavigation;
