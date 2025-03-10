import { Router } from "express";

import {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/propertyController.js";
import {
    validateRequest,
    createPropertyRules,
    deletePropertyRules,
    updatePropertyRules
} from "../middlewares/validateRequest.js";
import { checkProperty } from "../middlewares/entityExists.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createPropertyRules(), validateRequest, createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), validateRequest, checkProperty, deleteProperty);
propertyRoutes.put("/:id", updatePropertyRules(), validateRequest, checkProperty, updateProperty);