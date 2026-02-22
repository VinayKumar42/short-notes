import { Calendar, Copy, Eye, PencilLine, Trash2, Share2 } from "lucide-react"; // Import Share2 icon
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { removeFromPastes } from "../redux/pasteSlice";
import { FormatDate } from "../utlis/formatDate";

const Paste = ({ darkMode = false }) => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleDelete = (id) => {
    dispatch(removeFromPastes(id));
  };

  // Filter pastes based on search term (by title or content)
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full py-10 max-w-300 mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-3">
        {/* Search */}
        {/* <div className="w-full flex gap-3 px-4 py-2  rounded-[0.3rem] border border-[rgba(128,121,121,0.3)]  mt-6">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
          />
        </div> */}

        {/* //////////// */}
        <div className="w-full flex gap-3 px-4 py-2 rounded-[0.3rem] border border-[rgba(128,121,121,0.3)] mt-6">
          <input
            type="search"
            placeholder="Search paste here..."
            className="focus:outline-none w-full bg-transparent transition-all duration-200 hover:bg-black hover:shadow-lg hover:border hover:border-gray-500 text-white px-3 py-2 rounded-[0.3rem]"
            value={searchTerm} // Bind the input to searchTerm state
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
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
          <div className="w-full px-4 pt-4 flex flex-col gap-y-5">
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
                        <a href={`/?pasteId=${paste?._id}`}>
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
                      </button>
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
