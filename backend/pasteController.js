const { readDB, writeDB } = require("./db");
const { createPaste } = require("./pasteModel");

// GET all pastes
const getAllPastes = (req, res) => {
  try {
    const pastes = readDB();
    res.status(200).json({ success: true, pastes });
  } catch {
    res.status(500).json({ success: false, message: "Failed to fetch pastes." });
  }
};

// GET paste by _id
const getPasteById = (req, res) => {
  try {
    const pastes = readDB();
    const paste = pastes.find((p) => p._id === req.params.id);
    if (!paste) return res.status(404).json({ success: false, message: "Paste not found." });
    res.status(200).json({ success: true, paste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to fetch paste." });
  }
};

// POST create paste
const createNewPaste = (req, res) => {
  try {
    const { title, content } = req.body;
    if (!content) return res.status(400).json({ success: false, message: "Content is required." });
    const newPaste = createPaste(title, content);
    const pastes = readDB();
    pastes.unshift(newPaste);
    writeDB(pastes);
    res.status(201).json({ success: true, paste: newPaste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to create paste." });
  }
};

// PUT update paste
const updatePaste = (req, res) => {
  try {
    const { title, content } = req.body;
    const pastes = readDB();
    const index = pastes.findIndex((p) => p._id === req.params.id);
    if (index === -1) return res.status(404).json({ success: false, message: "Paste not found." });
    pastes[index] = {
      ...pastes[index],
      title: title ?? pastes[index].title,
      content: content ?? pastes[index].content,
      updatedAt: new Date().toISOString(),
    };
    writeDB(pastes);
    res.status(200).json({ success: true, paste: pastes[index] });
  } catch {
    res.status(500).json({ success: false, message: "Failed to update paste." });
  }
};

// DELETE single paste
const deletePaste = (req, res) => {
  try {
    const pastes = readDB();
    const index = pastes.findIndex((p) => p._id === req.params.id);
    if (index === -1) return res.status(404).json({ success: false, message: "Paste not found." });
    const deleted = pastes.splice(index, 1);
    writeDB(pastes);
    res.status(200).json({ success: true, message: "Paste deleted.", paste: deleted[0] });
  } catch {
    res.status(500).json({ success: false, message: "Failed to delete paste." });
  }
};

// DELETE all pastes
const deleteAllPastes = (req, res) => {
  try {
    writeDB([]);
    res.status(200).json({ success: true, message: "All pastes deleted." });
  } catch {
    res.status(500).json({ success: false, message: "Failed to delete all pastes." });
  }
};

module.exports = { getAllPastes, getPasteById, createNewPaste, updatePaste, deletePaste, deleteAllPastes };
