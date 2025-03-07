import { Router } from "express";

import {
    getProperties,
    createProperty
} from "../controllers/propetyController.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createProperty);