import { useDispatch, useSelector } from "react-redux";
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { toggleDarkMode } from "../redux/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);
  return (
    <div className="w-full h-11.25 flex justify-between items-center p-4 bg-gray-800">
      {/* Left: Navigation Links */}
      <div className="flex gap-x-5">
        {NavbarData.map((link, idx) => (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-semibold text-lg"
                : "text-white font-medium text-lg hover:text-blue-300 transition"
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* Sign In Button */}
        <NavLink
          to="/login"
          className="px-4 py-1.5 border border-blue-500 text-blue-400 rounded-md
                     hover:bg-blue-500 hover:text-white transition font-semibold"
        >
          Sign In
        </NavLink>

        {/* Sign Up Button */}
        <NavLink
          to="/register"
          className="px-4 py-1.5 border border-blue-500 text-blue-400 rounded-md
                     hover:bg-blue-500 hover:text-white transition font-semibold"
        >
          Sign Up
        </NavLink>

      </div>
      {/* Right: Toggle Button */}
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="px-4 py-1 bg-grey-500 text-white rounded hover:bg-blue-700 mr-4 font-bold "
      >
        {darkmode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;