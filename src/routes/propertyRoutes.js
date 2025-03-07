import { Router } from "express";

import {
    getProperties,
    createProperty,
    deleteProperty
} from "../controllers/propetyController.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createProperty);
propertyRoutes.delete("/:id", deleteProperty);