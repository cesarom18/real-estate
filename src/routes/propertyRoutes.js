import { Router } from "express";

import {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/propertyController.js";
import {
    createPropertyRules,
    deletePropertyRules,
    updatePropertyRules
} from "../middlewares/validator.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createPropertyRules(), createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), deleteProperty);
propertyRoutes.put("/:id", updatePropertyRules(), updateProperty);