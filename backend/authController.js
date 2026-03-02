const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser } = require("./userModel");

const USERS_PATH = path.join(__dirname, "users.json");
const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key_change_in_production";

const readUsers = () => {
  try {
    if (!fs.existsSync(USERS_PATH)) {
      fs.writeFileSync(USERS_PATH, JSON.stringify([]));
      return [];
    }
    const content = fs.readFileSync(USERS_PATH, "utf-8");
    return content ? JSON.parse(content) : [];
  } catch (err) {
    console.error("Failed to read users:", err);
    return [];
  }
};

const writeUsers = (data) => {
  try {
    fs.writeFileSync(USERS_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Failed to write users:", err);
  }
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ success: false, message: "All fields are required." });

    const users = readUsers();
    const existingUser = users.find((u) => u.email === email);
    if (existingUser)
      return res.status(409).json({ success: false, message: "Email already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = createUser(name, email, hashedPassword);
    users.push(newUser);
    writeUsers(users);

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({
      success: true,
      message: "Account created successfully.",
      token,
      user: { _id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "Signup failed." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ success: false, message: "Email and password are required." });

    const users = readUsers();
    const user = users.find((u) => u.email === email);
    if (!user)
      return res.status(401).json({ success: false, message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ success: false, message: "Invalid email or password." });

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: { _id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Login failed." });
  }
};

const getMe = (req, res) => {
  const users = readUsers();
  const user = users.find((u) => u._id === req.user.id);
  if (!user) return res.status(404).json({ success: false, message: "User not found." });
  res.json({ success: true, user: { _id: user._id, name: user.name, email: user.email } });
};

module.exports = { signup, login, getMe };