const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/authController");

// auth-route-> /api/signup
router.post("/signup", signup);

// auth-route-> /api/signin
router.post("/signin", signin);

module.exports = router;
