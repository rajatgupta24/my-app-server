const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key");
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const forgotPasswordController = (req, res) => {
  res.status(200).json({
    msg: "Hello, World!" + "/forgot-password",
  });
};

module.exports = {
  loginController,
  signupController,
  forgotPasswordController,
};
