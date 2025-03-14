import { Router } from "express";

import {
    getUsers,
    getUserById,
    createUser,
    deleteUser
} from "../controllers/userController.js";
import {
    validateRequest,
    createUserRules,
    getUserRules,
    deleteUserRules
} from "../middlewares/validateRequest.js";
import { checkUser } from "../middlewares/entityExists.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

export const userRoutes = Router();

userRoutes.get("/", authenticateUser, getUsers);
userRoutes.get("/:id", authenticateUser, getUserRules(), validateRequest, checkUser, getUserById);
userRoutes.post("/", authenticateUser, createUserRules(), validateRequest, createUser);
userRoutes.delete("/:id", authenticateUser, deleteUserRules(), validateRequest, checkUser, deleteUser);