const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "pastes.json");

// Safely initialize the file if it doesn't exist
const initDB = () => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify([]));
    }
  } catch (err) {
    console.error("Failed to initialize DB:", err);
  }
};

initDB();

const readDB = () => {
  try {
    if (!fs.existsSync(DB_PATH)) return [];
    const content = fs.readFileSync(DB_PATH, "utf-8");
    return content ? JSON.parse(content) : [];
  } catch (err) {
    console.error("Failed to read DB:", err);
    return [];
  }
};

const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Failed to write DB:", err);
  }
};

module.exports = { readDB, writeDB };