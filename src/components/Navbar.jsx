import { useDispatch, useSelector } from "react-redux";
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
import { toggleDarkMode } from "../redux/themeSlice";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-gray-700 dark:bg-gray-800 border-t border-gray-600 dark:border-gray-700" id="mobile-nav">
          <div className="flex flex-col gap-y-2 px-4 py-3">
            {NavbarData.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-3 rounded-md font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                    isActive
                      ? "bg-blue-600 dark:bg-blue-700 text-white"
                      : "text-gray-100 dark:text-gray-300 hover:bg-gray-600 dark:hover:bg-gray-700"
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;