const express = require("express");
const router = express();
const { signUp, signIn } = require("../controller/auth.controller");
const { configureMulter } = require("../helper");

router
  .post(
    "/auth/sign-up",
    configureMulter("user")?.single("profile_image"),
    signUp
  )
  .post("/auth/sign-in", signIn);

module.exports = router;
