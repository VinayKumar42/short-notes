
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";
import { Copy, PlusCircle } from "lucide-react";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [textareaRows, setTextareaRows] = useState(20);
  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);

  // Update textarea rows based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTextareaRows(10);
      } else {
        setTextareaRows(20);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id:
        pasteId ||
        Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
  };

  useEffect(() => {
    if (pasteId) {
      const paste = pastes.find((p) => p._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, pastes]);

  return (
    <div className="w-full py-6 sm:py-10 px-4 sm:px-5 max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-5">
        {/* Title Input and Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <input
            type="text"
            placeholder="Enter paste title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`flex-1 border border-gray-300 rounded-md p-2 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 text-sm sm:text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 ${
              darkmode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          />
          <div className="flex gap-2">
            <button
              className="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-offset-gray-900 text-xs sm:text-sm whitespace-nowrap"
              onClick={createPaste}
            >
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>

            {pasteId && (
              <button
                className="px-3 sm:px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-offset-gray-900 text-xs sm:text-sm"
                onClick={resetPaste}
                aria-label="Create new paste"
              >
                <PlusCircle size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Editor Container */}
        <div
          className={`w-full flex flex-col rounded-lg overflow-hidden border transition-colors duration-200 ${
            darkmode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          {/* Decorative Header (macOS-style window controls) */}
          <div
            className={`w-full flex items-center gap-2 px-4 py-3 border-b transition-colors duration-200 ${
              darkmode
                ? "border-gray-700 bg-gray-700"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1" />
            {/* Copy Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to Clipboard", {
                  position: "top-right",
                });
              }}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
              aria-label="Copy to clipboard"
            >
              <Copy
                size={18}
                className="text-gray-600 dark:text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors duration-200"
              />
            </button>
          </div>

          {/* Textarea */}
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your content here..."
            className={`w-full p-3 bg-white text-black focus-visible:ring-0 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 resize-y font-mono text-sm ${
              darkmode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            style={{ caretColor: darkmode ? "#fff" : "#000" }}
            rows={textareaRows}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
