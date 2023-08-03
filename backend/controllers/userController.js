const User = require("../models/userModel");

// login user
const loginUser = async (req, res) => {
  res.json({ mssg: "user login" });
};

// signup users
const signupUser = async (req, res) => {
  res.json({ mssg: "user signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
