import { Calendar, Copy, Eye, PencilLine, Trash2, Share2, StickyNote } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";

const Paste = () => {
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

        {/* All Pastes Section */}
        <div
          className={`flex flex-col border rounded-lg overflow-hidden transition-colors duration-200 ${
            darkmode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
          }`}
        >
          {/* Header */}
          <h2
            className={`px-4 sm:px-6 py-4 text-2xl sm:text-3xl md:text-4xl font-bold border-b transition-colors duration-200 ${
              darkmode ? "border-gray-700 bg-gray-700" : "border-gray-200 bg-gray-50"
            }`}
          >
            All Pastes
          </h2>

          {/* Pastes List */}
          <div className="w-full px-4 sm:px-6 py-4 sm:py-6 flex flex-col gap-y-4 sm:gap-y-6" role="list" aria-live="polite" aria-atomic="true">
            {filteredPastes.length > 0 ? (
              filteredPastes.map((paste) => (
                <div
                  key={paste?._id}
                  role="listitem"
                  className={`border rounded-lg p-4 sm:p-6 transition-all duration-200 ${
                    darkmode
                      ? "border-gray-700 hover:border-gray-600 bg-gray-800"
                      : "border-gray-200 hover:border-gray-300 bg-gray-50"
                  }`}
                >
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Left: Title & Content Preview */}
                    <div className="flex flex-col gap-3">
                      <h3
                        className={`text-xl sm:text-2xl md:text-3xl font-bold line-clamp-2 ${
                          darkmode ? "text-white" : "text-black"
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
                            className="text-black dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200"
                            size={18}
                          />
                        </a>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(paste?._id)}
                          className="p-2 rounded-[0.2rem] bg-white border border-gray-300 hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-800 group"
                          title="Delete paste"
                          aria-label="Delete paste"
                        >
                          <Trash2
                            className="text-black dark:text-white group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200"
                            size={18}
                          />
                        </button>

                        {/* View Button */}
                        <a
                          href={`/pastes/${paste?._id}`}
                          className="p-2 rounded-[0.2rem] bg-white border border-gray-300 hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-800 group"
                          title="View paste"
                          aria-label="View paste"
                        >
                          <Eye
                            className="text-black dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-200"
                            size={18}
                          />
                        </a>

                        {/* Copy Button */}
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(paste?.content);
                            toast.success("Copied to Clipboard");
                          }}
                          className="p-2 rounded-[0.2rem] bg-white border border-gray-300 hover:bg-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-800 group"
                          title="Copy to clipboard"
                          aria-label="Copy to clipboard"
                        >
                          <Copy
                            className="text-black dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-200"
                            size={18}
                          />
                        </button>

                        {/* Share Button */}
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
                            className="text-black dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-200"
                            size={18}
                          />
                        </a>
                      </div>

                      {/* Date - Desktop Only */}
                      <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        <Calendar size={16} />
                        <span>{FormatDate(paste?.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                className={`text-center py-16 px-4 border-t transition-colors duration-200 ${
                  darkmode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
                }`}
              >
                <StickyNote
                  size={48}
                  className="mx-auto mb-4 text-gray-400 dark:text-gray-600"
                />
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-2 ${
                    darkmode ? "text-white" : "text-black"
                  }`}
                >
                  {searchTerm ? "No results found" : "No notes yet"}
                </h3>
                <p
                  className={`text-sm sm:text-base mb-6 ${
                    darkmode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {searchTerm
                    ? "Try a different search term to find your notes"
                    : "Create your first note to get started"}
                </p>

                {searchTerm ? (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-offset-gray-900"
                  >
                    Clear Search
                  </button>
                ) : (
                  <NavLink to="/" className="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-offset-gray-900 inline-block">
                    + Create a Note
                  </NavLink>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paste;
