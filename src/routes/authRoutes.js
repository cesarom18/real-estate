import { Router } from "express";

import {
    signUp
} from "../controllers/authController.js";
import {
    validateRequest,
    createUserRules
} from "../middlewares/validateRequest.js";

export const authRoutes = Router();

authRoutes.post("/sign-up", createUserRules(), validateRequest, signUp);