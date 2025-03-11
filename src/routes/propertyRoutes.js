import { Router } from "express";

import {
    getProperties,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty
} from "../controllers/propertyController.js";
import {
    validateRequest,
    createPropertyRules,
    getPropertyRules,
    deletePropertyRules,
    updatePropertyRules
} from "../middlewares/validateRequest.js";
import { checkProperty } from "../middlewares/entityExists.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.get("/:id", getPropertyRules(), validateRequest, checkProperty, getPropertyById);
propertyRoutes.post("/", createPropertyRules(), validateRequest, createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), validateRequest, checkProperty, deleteProperty);
propertyRoutes.put("/:id", updatePropertyRules(), validateRequest, checkProperty, updateProperty);