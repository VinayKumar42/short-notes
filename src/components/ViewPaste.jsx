import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const darkmode = useSelector((state) => state.theme.darkmode);
  const [paste, setPaste] = useState(null);
  const [loading, setLoading] = useState(true);
  const [textareaRows, setTextareaRows] = useState(20);

  // Fetch the individual paste directly from backend
  useEffect(() => {
    const fetchPaste = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pastes/${id}`);
        const data = await res.json();
        if (data.success) {
          setPaste(data.paste);
        } else {
          toast.error("Paste not found.");
        }
      } catch {
        toast.error("Failed to load paste.");
      } finally {
        setLoading(false);
      }
    };

    fetchPaste();
  }, [id]);

  // Update textarea rows based on screen size
  useEffect(() => {
    const handleResize = () => {
      setTextareaRows(window.innerWidth < 768 ? 10 : 20);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return (
      <div className="w-full py-20 text-center text-xl text-gray-400">
        Loading...
      </div>
    );
  }

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
            className={`w-full p-3 focus-visible:ring-0 transition-colors duration-200 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 disabled:opacity-70 disabled:cursor-not-allowed resize-y font-mono text-sm ${
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