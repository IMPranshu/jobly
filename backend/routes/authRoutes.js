const express = require("express");
const router = express.Router();
const { signup, signin, logout } = require("../controllers/authController");

// auth-route-> /api/signup
router.post("/signup", signup);

// auth-route-> /api/signin
router.post("/signin", signin);

// auth-route-> /api/logout
router.get("/logout", logout);

module.exports = router;
