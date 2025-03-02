const AuthRouter = require("express").Router();
const {
  loginController,
  signupController,
  forgotPasswordController,
} = require("../controllers/auth-controller");

AuthRouter.post("/login", loginController);
AuthRouter.post("/signup", signupController);
AuthRouter.post("/forgot-password", forgotPasswordController);

module.exports = AuthRouter;
