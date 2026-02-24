import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const darkmode = useSelector((state) => state.theme.darkmode);
  const [textareaRows, setTextareaRows] = useState(20);

  const paste = pastes.filter((paste) => paste._id === id)[0];

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

  if (!paste) {
    return (
      <div className="w-full h-full py-10 px-4 sm:px-5 max-w-3xl mx-auto flex items-center justify-center">
        <p className="text-lg sm:text-2xl text-gray-500 dark:text-gray-400">
          Paste not found
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-6 sm:py-10 px-4 sm:px-5 max-w-3xl mx-auto">
      <div className="flex flex-col gap-y-5">
        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          value={paste.title}
          disabled
          className={`border border-gray-300 rounded-md p-2 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base ${
            darkmode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        />

        {/* Viewer Container */}
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
                navigator.clipboard.writeText(paste.content);
                toast.success("Copied to Clipboard");
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
            value={paste.content}
            disabled
            placeholder="No content"
            className={`w-full p-3 bg-white text-black focus-visible:ring-0 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 disabled:opacity-70 disabled:cursor-not-allowed resize-y font-mono text-sm ${
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

export default ViewPaste;
