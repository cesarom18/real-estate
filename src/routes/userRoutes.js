import { Router } from "express";

import {
    getUsers,
    createUser,
    deleteUser
} from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);
userRoutes.delete("/:id", deleteUser);