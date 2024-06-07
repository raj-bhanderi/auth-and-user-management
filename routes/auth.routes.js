const express = require("express");
const router = express();
const { signUp, signIn } = require("../controller/auth.controller");

router.post("/auth/sign-up", signUp).post("/auth/sign-in", signIn);

module.exports = router;
