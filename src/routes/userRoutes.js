import { Router } from "express";

import {
    getUsers
} from "../controllers/userController.js";

export const userRoutes = Router();

userRoutes.get("/", getUsers);