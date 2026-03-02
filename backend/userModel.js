const { v4: uuidv4 } = require("uuid");

const createUser = (name, email, password) => {
  return {
    _id: uuidv4(),
    name,
    email,
    password, // hashed before storing
    createdAt: new Date().toISOString(),
  };
};

module.exports = { createUser };
