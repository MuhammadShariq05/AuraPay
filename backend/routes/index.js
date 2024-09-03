const express = require("express");
const userRouter = require("./userRoute");
const accountRouter = require("./accountRouter");
const router = express.Router();
const { authMiddleware } = require("../middleware");

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = {
  router,
};