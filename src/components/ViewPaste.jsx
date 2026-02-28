import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewPaste = ({ darkMode = false }) => {
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
          className={`w-full rounded-md p-3 transition-colors duration-200 cursor-not-allowed ${
            darkMode
              ? "bg-gray-800 text-gray-100 border border-gray-700"
              : "bg-gray-100 text-gray-900 border border-gray-300"
          }`}
        />

        {/* Viewer Container */}
        <div
          className={`w-full flex flex-col items-start relative rounded transition-colors duration-200 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-300 shadow-sm"
          }`}
        >
          {/* Decorative Header (macOS-style window controls) */}
          <div
            className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 ${
              darkMode ? "border-b border-gray-700" : "border-b border-gray-300"
            }`}
          >
            <div className="w-full flex gap-x-1.5 items-center select-none group">
              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(255,95,87)]" />

              <div
                className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(254,188,46)]"
              />

              <div className="w-[13px] h-[13px] rounded-full flex items-center justify-center p-px overflow-hidden bg-[rgb(45,200,66)]" />
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
              {/*Copy  button */}
              <button
                className={`flex justify-center items-center transition-all duration-300 ease-in-out group`}
                onClick={() => {
                  navigator.clipboard.writeText(paste.content);
                  toast.success("Copied to Clipboard");
                }}
              >
                <Copy 
                  className={`transition-colors ${
                    darkMode
                      ? "text-gray-400 group-hover:text-green-400"
                      : "text-gray-600 group-hover:text-green-600"
                  }`} 
                  size={20} 
                />
              </button>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            value={paste.content}
            disabled
            placeholder="Write Your Content Here...."
            className={`w-full p-4 focus:outline-none resize-none cursor-not-allowed transition-colors duration-200 ${
              darkMode
                ? "bg-gray-800 text-gray-100"
                : "bg-gray-100 text-gray-900"
            }`}
            style={{
              caretColor: darkMode ? "#fff" : "#000",
            }}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
