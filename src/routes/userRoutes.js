import { Router } from "express";

import {
    getUsers,
    createUser
} from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUser);