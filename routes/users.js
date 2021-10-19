import express from "express";

import {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/users.js";
const router = express.Router();

//retrieve all users
router.get("/", getUsers);

//add new user
router.post("/", createUser);

//search specific user by id
router.get("/:id", getUserById);

//delete user by id
router.delete("/:id", deleteUserById);

//update user attribute
router.patch("/:id", updateUserById);

export default router;
