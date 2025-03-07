import { Router } from "express";

import {
    getProperties
} from "../controllers/propetyController.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);