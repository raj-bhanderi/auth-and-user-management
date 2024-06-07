const express = require("express");
const router = express();

const {
  create,
  findAll,
  findOne,
  userDelete,
  update,
} = require("../controller/user.controller");

router
  .post("/user/create", create)
  .get("/user/all", findAll)
  .get("/user/:id", findOne)
  .delete("/user/:id", userDelete)
  .put("/user/:id",update)

module.exports = router;
