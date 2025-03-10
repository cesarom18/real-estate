import { Router } from "express";

import {
    getUsers,
    createUser,
    deleteUser
} from "../controllers/userController.js";
import {
    validateRequest,
    createUserRules,
    deleteUserRules
} from "../middlewares/validateRequest.js";
import { checkUser } from "../middlewares/entityExists.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUserRules(), validateRequest, createUser);
userRoutes.delete("/:id", deleteUserRules(), validateRequest, checkUser, deleteUser);