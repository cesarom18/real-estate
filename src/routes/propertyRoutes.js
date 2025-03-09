import { Router } from "express";

import {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/propetyController.js";
import { createPropertyRules } from "./validator.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createPropertyRules(), createProperty);
propertyRoutes.delete("/:id", deleteProperty);
propertyRoutes.put("/:id", updateProperty)