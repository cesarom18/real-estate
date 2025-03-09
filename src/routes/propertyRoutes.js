import { Router } from "express";

import {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/propetyController.js";
import {
    createPropertyRules,
    deletePropertyRules
} from "./validator.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createPropertyRules(), createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), deleteProperty);
propertyRoutes.put("/:id", updateProperty)