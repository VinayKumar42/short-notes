const mongoose = require("mongoose");

const pasteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // auto adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Paste", pasteSchema);
