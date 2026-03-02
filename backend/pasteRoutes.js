const express = require("express");
const router = express.Router();
const {
  getAllPastes,
  getPasteById,
  createNewPaste,
  updatePaste,
  deletePaste,
  deleteAllPastes,
} = require("./pasteController");

router.delete("/", deleteAllPastes);   // must be before /:id
router.get("/", getAllPastes);
router.get("/:id", getPasteById);
router.post("/", createNewPaste);
router.put("/:id", updatePaste);
router.delete("/:id", deletePaste);

module.exports = router;
