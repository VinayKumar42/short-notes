import { Calendar, Copy, Eye, PencilLine, Trash2, Share2, StickyNote } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";

const Paste = ({ darkMode = false }) => {
  const pastes = useSelector((state) => state.paste.pastes);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full py-6 sm:py-10 px-4 sm:px-5 max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-5">
        {/* Search Input */}
        <div
          className={`w-full flex gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
            darkmode
              ? "bg-gray-800 border-gray-700 hover:border-gray-600"
              : "bg-white border-gray-200 hover:border-gray-300"
          }`}
        >
          <label htmlFor="search-pastes" className="absolute w-1 h-1 p-0 -m-1 overflow-hidden clip-rect-0 whitespace-nowrap border-0">
            Search pastes by title
          </label>
          <input
            id="search-pastes"
            type="search"
            placeholder="Search pastes by title..."
            className={`focus:outline-none w-full bg-transparent text-sm sm:text-base transition-all duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded px-2 py-1 ${
              darkmode
                ? "text-white placeholder-gray-500"
                : "text-black placeholder-gray-400"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* All Pastes */}
        <div className={`flex flex-col py-4 rounded-[0.4rem] transition-colors duration-200 ${
          darkMode
            ? "border border-gray-700 bg-gray-800"
            : "border border-gray-300 bg-white shadow-sm"
        }`}>
          <h2 className={`px-4 text-4xl font-bold pb-4 ${
            darkMode
              ? "border-b border-gray-700 text-gray-100"
              : "border-b border-gray-300 text-gray-900"
          }`}>
            All Pastes
          </h2>

          {/* Pastes List */}
          <div className="w-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-y-4 sm:gap-y-6" role="list" aria-live="polite" aria-atomic="true">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div
                  key={paste?._id}
                  className={`w-full gap-y-6 justify-between flex flex-col sm:flex-row p-4 rounded-[0.3rem] transition-all duration-200 ${
                    darkMode
                      ? "border border-gray-700 bg-gray-750 hover:border-gray-600"
                      : "border border-gray-300 bg-gray-50 hover:border-gray-400 shadow-sm"
                  }`}
                >
                  {/* heading and Description */}
                  <div className="w-[50%] flex flex-col space-y-3">
                    <p className={`text-4xl font-semibold ${
                      darkMode ? "text-gray-100" : "text-gray-900"
                    }`}>
                      {paste?.title}
                    </p>
                    <p className={`text-sm font-normal line-clamp-3 max-w-[80%] ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {paste?.content}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="flex flex-col gap-y-4 sm:items-end">
                    <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                      <button
                        className={`p-2 rounded-[0.2rem] transition-all duration-200 group ${
                          darkMode
                            ? "bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:border-blue-500"
                            : "bg-white border border-gray-300 hover:bg-gray-50 hover:border-blue-500 shadow-sm"
                        }`}
                      >
                        {paste?.title}
                      </h3>
                      <p className="text-sm sm:text-base line-clamp-3 text-gray-500 dark:text-gray-400">
                        {paste?.content}
                      </p>
                      {/* Date - Mobile Only */}
                      <div className="flex items-center gap-2 md:hidden text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{FormatDate(paste?.createdAt)}</span>
                      </div>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex flex-col gap-3 md:items-end md:justify-between">
                      {/* Button Row */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {/* Edit Button */}
                        <a
                          href={`/?pasteId=${paste?._id}`}
                          className="p-2 rounded-[0.2rem] bg-white border border-gray-300 hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-800 group"
                          title="Edit paste"
                          aria-label="Edit paste"
                        >
                          <PencilLine
                            className={`transition-colors ${
                              darkMode
                                ? "text-gray-300 group-hover:text-blue-400"
                                : "text-gray-700 group-hover:text-blue-600"
                            }`}
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className={`p-2 rounded-[0.2rem] transition-all duration-200 group ${
                          darkMode
                            ? "bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:border-pink-500"
                            : "bg-white border border-gray-300 hover:bg-gray-50 hover:border-pink-500 shadow-sm"
                        }`}
                        onClick={() => handleDelete(paste?._id)}
                      >
                        <Trash2
                          className={`transition-colors ${
                            darkMode
                              ? "text-gray-300 group-hover:text-pink-400"
                              : "text-gray-700 group-hover:text-pink-600"
                          }`}
                          size={20}
                        />
                      </button>

                      <button className={`p-2 rounded-[0.2rem] transition-all duration-200 group ${
                        darkMode
                          ? "bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:border-orange-500"
                          : "bg-white border border-gray-300 hover:bg-gray-50 hover:border-orange-500 shadow-sm"
                      }`}>
                        <a href={`/pastes/${paste?._id}`} target="_blank" rel="noreferrer">
                          <Eye
                            className={`transition-colors ${
                              darkMode
                                ? "text-gray-300 group-hover:text-orange-400"
                                : "text-gray-700 group-hover:text-orange-600"
                            }`}
                            size={20}
                          />
                        </a>
                      </button>
                      <button
                        className={`p-2 rounded-[0.2rem] transition-all duration-200 group ${
                          darkMode
                            ? "bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:border-green-500"
                            : "bg-white border border-gray-300 hover:bg-gray-50 hover:border-green-500 shadow-sm"
                        }`}
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("Copied to Clipboard");
                        }}
                      >
                        <Copy
                          className={`transition-colors ${
                            darkMode
                              ? "text-gray-300 group-hover:text-green-400"
                              : "text-gray-700 group-hover:text-green-600"
                          }`}
                          size={20}
                        />
                      </button>

                      {/* Share Button */}
                      <button
                        className={`p-2 rounded-[0.2rem] transition-all duration-200 group ${
                          darkMode
                            ? "bg-gray-700 border border-gray-600 hover:bg-gray-600 hover:border-purple-500"
                            : "bg-white border border-gray-300 hover:bg-gray-50 hover:border-purple-500 shadow-sm"
                        }`}
                      >
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                            `Check out this paste: ${paste?.title}\n\n${paste?.content}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-[0.2rem] bg-white border border-gray-300 hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-800 group"
                          title="Share on WhatsApp"
                          aria-label="Share on WhatsApp"
                        >
                          <Share2
                            className={`transition-colors ${
                              darkMode
                                ? "text-gray-300 group-hover:text-purple-400"
                                : "text-gray-700 group-hover:text-purple-600"
                            }`}
                            size={20}
                          />
                        </a>
                      </div>

                    <div className={`gap-x-2 flex items-center ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                      <Calendar size={20} />
                      {FormatDate(paste?.createdAt)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className={`text-2xl text-center w-full py-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}>
                No Data Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paste;
