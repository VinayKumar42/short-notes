const express = require("express");
const cors = require("cors");
const pasteRoutes = require("./pasteRoutes");
const authRoutes = require("./authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*",   // allows all origins — fine for now, can restrict later
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use("/api/pastes", pasteRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Paste App API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});