const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/Users");

const router = express.Router();

//** Membuat endpoint user */
router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
