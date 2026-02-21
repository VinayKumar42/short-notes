import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <div className="w-full h-[60px] flex justify-between items-center px-6 bg-gray-800">

      {/* LEFT SIDE — NAV LINKS */}
      <div className="flex gap-x-6">
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

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-4 py-1.5 bg-gray-600 text-white rounded-md
                     hover:bg-gray-500 transition font-semibold"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;