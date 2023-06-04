import { NavLink, useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const isAuth = localStorage.getItem("token");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="px-6 bg-violet-300 text-2xl h-[70px]">
      <nav>
        <ul className="flex justify-between items-center pt-3">
          <li>
            <NavLink
              to="/"
              className={`${({ isActive }) =>
                isActive
                  ? "bg-violet-200"
                  : undefined} p-2 rounded-md hover:bg-violet-200 transition-all duration-500`}
              end
            >
              Home
            </NavLink>
          </li>

          {isAuth ? (
            <div className="mr-20 w-[25%] flex justify-between items-center">
              <li>
                <NavLink
                  to="/add-movie"
                  className={`${({ isActive }) =>
                    isActive
                      ? "bg-violet-200"
                      : "bg-red-500"} p-2 rounded-md hover:bg-violet-200 transition-all duration-500`}
                >
                  Add Movie
                </NavLink>
              </li>
              <li
                onClick={logoutHandler}
                className="cursor-pointer p-2 rounded-md hover:bg-violet-200 transition-all duration-500"
              >
                Logout
              </li>
            </div>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={`${({ isActive }) =>
                  isActive
                    ? "bg-violet-200"
                    : undefined} mr-20 p-2 rounded-md hover:bg-violet-200 transition-all duration-500`}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
