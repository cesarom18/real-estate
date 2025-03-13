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
    getPropertiesRules,
    getPropertyRules,
    deletePropertyRules,
    updatePropertyRules
} from "../middlewares/validateRequest.js";
import {
    checkProperty,
    checkUser,
    checkPropertyType
} from "../middlewares/entityExists.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getPropertiesRules(), validateRequest, getProperties);
propertyRoutes.get("/:id", getPropertyRules(), validateRequest, checkProperty, getPropertyById);
propertyRoutes.post("/", createPropertyRules(), validateRequest, checkUser, checkPropertyType, createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), validateRequest, checkProperty, deleteProperty);
propertyRoutes.put("/:id", updatePropertyRules(), validateRequest, checkProperty, updateProperty);