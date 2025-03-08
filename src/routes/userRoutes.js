import { Router } from "express";

import {
    getUsers,
    createUser,
    deleteUser
} from "../controllers/userController.js";
import { createUserRules } from "./validator.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUserRules(), createUser);
userRoutes.delete("/:id", deleteUser);