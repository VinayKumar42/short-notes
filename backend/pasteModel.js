const { v4: uuidv4 } = require("uuid");

const createPaste = (title, content) => {
  return {
    _id: uuidv4(),        // _id matches what the frontend uses
    title: title || "Untitled",
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

module.exports = { createPaste };
