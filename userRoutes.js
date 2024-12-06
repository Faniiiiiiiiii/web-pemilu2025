const express = require("express");
const { loginUser } = require("./userController");

const router = express.Router();

// Route untuk login
router.post("/", loginUser);

module.exports = router;
