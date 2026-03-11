const Paste = require("./pasteModel");

// GET all pastes
const getAllPastes = async (req, res) => {
  try {
    const pastes = await Paste.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, pastes });
  } catch {
    res.status(500).json({ success: false, message: "Failed to fetch pastes." });
  }
};

// GET paste by _id
const getPasteById = async (req, res) => {
  try {
    const paste = await Paste.findById(req.params.id);
    if (!paste) return res.status(404).json({ success: false, message: "Paste not found." });
    res.status(200).json({ success: true, paste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to fetch paste." });
  }
};

// POST create paste
const createNewPaste = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!content) return res.status(400).json({ success: false, message: "Content is required." });
    const newPaste = await Paste.create({ title, content });
    res.status(201).json({ success: true, paste: newPaste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to create paste." });
  }
};

// PUT update paste
const updatePaste = async (req, res) => {
  try {
    const { title, content } = req.body;
    const paste = await Paste.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );
    if (!paste) return res.status(404).json({ success: false, message: "Paste not found." });
    res.status(200).json({ success: true, paste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to update paste." });
  }
};

// DELETE single paste
const deletePaste = async (req, res) => {
  try {
    const paste = await Paste.findByIdAndDelete(req.params.id);
    if (!paste) return res.status(404).json({ success: false, message: "Paste not found." });
    res.status(200).json({ success: true, message: "Paste deleted.", paste });
  } catch {
    res.status(500).json({ success: false, message: "Failed to delete paste." });
  }
};

// DELETE all pastes
const deleteAllPastes = async (req, res) => {
  try {
    await Paste.deleteMany({});
    res.status(200).json({ success: true, message: "All pastes deleted." });
  } catch {
    res.status(500).json({ success: false, message: "Failed to delete all pastes." });
  }
};

module.exports = { getAllPastes, getPasteById, createNewPaste, updatePaste, deletePaste, deleteAllPastes };
