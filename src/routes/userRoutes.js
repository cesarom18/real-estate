import { Router } from "express";

import {
    getUsers,
    createUser,
    deleteUser
} from "../controllers/userController.js";
import {
    createUserRules,
    deleteUserRules
} from "../middlewares/validateRequest.js";
import { checkUser } from "../middlewares/entityExists.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);
userRoutes.post("/", createUserRules(), createUser);
userRoutes.delete("/:id", deleteUserRules(), checkUser, deleteUser);