const AuthRouter = require("express").Router();
const {
  loginController,
  signupController,
  forgotPasswordController,
  resetPasswordController,
} = require("../controllers/auth-controller");

AuthRouter.post("/login", loginController);
AuthRouter.post("/signup", signupController);
AuthRouter.post("/forgot-password", forgotPasswordController);
AuthRouter.post("/reset-password", resetPasswordController);

module.exports = AuthRouter;
