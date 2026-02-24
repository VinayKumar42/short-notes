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
    <nav className="w-full bg-gray-800 dark:bg-gray-900 transition-colors duration-200 sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <span className="text-white font-bold text-lg sm:text-xl">Notes</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-x-6 md:gap-x-8" role="navigation" aria-label="Main navigation">
          {NavbarData.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-base md:text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded px-2 py-1 ${
                  isActive
                    ? "text-blue-500 dark:text-blue-400 font-semibold"
                    : "text-white dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>

        {/* Right: Toggle Theme & Mobile Menu */}
        <div className="flex items-center gap-x-3">
          <button
            onClick={() => dispatch(toggleDarkMode())}
            className="p-2 rounded-lg bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 text-yellow-400 dark:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Toggle dark mode"
          >
            {darkmode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-lg bg-gray-700 dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-gray-700 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
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