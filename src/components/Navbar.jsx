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
              `font-semibold text-xl transition-colors duration-200 ${
                isActive
                  ? "text-blue-500"
                  : darkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
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