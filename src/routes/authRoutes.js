import { Router } from "express";

import {
    signUp,
    login
} from "../controllers/authController.js";
import {
    validateRequest,
    createUserRules,
    loginRules
} from "../middlewares/validateRequest.js";

export const authRoutes = Router();

authRoutes.post("/sign-up", createUserRules(), validateRequest, signUp);
authRoutes.post("/login", loginRules(), validateRequest, login);