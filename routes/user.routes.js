const express = require("express");
const router = express();

const {
  create,
  findAll,
  findOne,
  userDelete,
  update,
} = require("../controller/user.controller");
const { authenticate } = require("../helper/middleware");
const { configureMulter } = require("../helper");

router
  .post("/user/create", create)
  .get("/user/all", authenticate, findAll)
  .get("/user/:id", authenticate, findOne)
  .delete("/user/:id", authenticate, userDelete)
  .put("/user/:id", authenticate, configureMulter("user")?.single("profile_image"), update);

module.exports = router;
