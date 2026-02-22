import { Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = ({ darkMode = false }) => {
  const { id } = useParams();

  console.log(id)

  const pastes = useSelector((state) => state.paste.pastes);

  // Filter pastes based on search term (by title or content)
  const paste = pastes.filter((paste) => paste._id === id)[0];

  console.log("Paste->",paste);
  return (
    <div className="w-full h-full py-10 max-w-[1200px] mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5 items-start">
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
        <div
          className={`w-full flex flex-col items-start relative rounded transition-colors duration-200 ${
            darkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-300 shadow-sm"
          }`}
        >
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
            {/* Circle and copy btn */}
            <div
              className={`w-fit rounded-t flex items-center justify-between gap-x-4 px-4`}
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

          {/* TextArea */}
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
