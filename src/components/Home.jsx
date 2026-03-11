import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updatePastes, fetchAllPastes } from "../redux/pasteSlice";
import { useSearchParams } from "react-router-dom";
import { Copy, PlusCircle } from "lucide-react";

const Home = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [textareaRows, setTextareaRows] = useState(20);
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get("pasteId");
  const pastes = useSelector((state) => state.paste.pastes);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const dispatch = useDispatch();

  // Responsive textarea rows
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

  // Load pastes from backend
  useEffect(() => {
    dispatch(fetchAllPastes());
  }, [dispatch]);

  const createPaste = () => {
    if (!value.trim()) {
      toast.error("Content cannot be empty.");
      return;
    }

    const paste = {
      title,
      content: value,
      _id: pasteId,
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

  // Prefill when editing
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

        <div className="w-full flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <input
            type="text"
            placeholder="Enter paste title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`flex-1 border border-gray-300 rounded-md p-2 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 text-sm sm:text-base ${
              darkmode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          />

          <div className="flex gap-2">
            <button
              className="px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm"
              onClick={createPaste}
            >
              {pasteId ? "Update Paste" : "Create Paste"}
            </button>

            {pasteId && (
              <button
                className="px-3 py-2.5 text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                onClick={resetPaste}
              >
                <PlusCircle size={18} />
              </button>
            )}
          </div>
        </div>

        <div
          className={`w-full flex flex-col rounded-lg overflow-hidden border ${
            darkmode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div
            className={`w-full flex items-center gap-2 px-4 py-3 border-b ${
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

            <button
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to Clipboard");
              }}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Copy size={18} />
            </button>
          </div>

          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your content here..."
            className={`w-full p-3 resize-y font-mono text-sm ${
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