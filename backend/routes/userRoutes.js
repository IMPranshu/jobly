const express = require("express");
const router = express.Router();
const {
  allUsers,
  singleUser,
  editUser,
  deleteUser,
  createUserJobsHistory,
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
// user-route-> /api/user/jobhistory
router.post("/user/jobhistory", isAuthenticated, createUserJobsHistory);

module.exports = router;
