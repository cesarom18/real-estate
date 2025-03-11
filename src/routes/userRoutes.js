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

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserRules(), validateRequest, checkUser, getUserById)
userRoutes.post("/", createUserRules(), validateRequest, createUser);
userRoutes.delete("/:id", deleteUserRules(), validateRequest, checkUser, deleteUser);