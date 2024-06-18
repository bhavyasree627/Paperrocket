const express = require("express");
const userRouter = express.Router();
const user = require("../controllers/User");

userRouter.post("/login", user.login);
userRouter.post("/signup", user.signup);
module.exports = userRouter;
