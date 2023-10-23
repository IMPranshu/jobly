const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticated, isAdmin } = require("../middleware/auth");

//user routes

// user-route-> /api/allusers
router.get("/allusers", isAuthenticated, isAdmin, allUsers);
// user-route-> /api/user/id
router.get("/user/:id", isAuthenticated, singleUser);
// user-route-> /api/user/edit/id
router.put("/user/edit/:id", isAuthenticated, editUser);
// user-route-> /api/admin/user/delete/id
router.delete("/admin/user/delete/:id", isAuthenticated, isAdmin, deleteUser);

module.exports = router;
