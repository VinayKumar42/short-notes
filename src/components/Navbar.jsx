import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <div className={`w-full h-[45px] flex justify-between items-center p-4 transition-colors duration-300 ${
      darkMode 
        ? "bg-gray-800 border-b border-gray-700" 
        : "bg-white border-b border-gray-200 shadow-sm"
    }`}>
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
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
          darkMode
            ? "bg-gray-700 text-gray-100 hover:bg-gray-600 border border-gray-600"
            : "bg-gray-900 text-white hover:bg-gray-800 border border-gray-900"
        }`}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

export default Navbar;