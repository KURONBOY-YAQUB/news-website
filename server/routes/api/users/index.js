const express = require("express");
const router = express.Router();
const userController = require("./user");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/", userController.getAllUsers);

router.delete("/:id", userController.deleteUser);

module.exports = router;
