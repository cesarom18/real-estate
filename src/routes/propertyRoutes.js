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
import { authenticateUser } from "../middlewares/authenticateUser.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", authenticateUser, getPropertiesRules(), validateRequest, getProperties);
propertyRoutes.get("/:id", authenticateUser, getPropertyRules(), validateRequest, checkProperty, getPropertyById);
propertyRoutes.post("/", authenticateUser, createPropertyRules(), validateRequest, checkUser, checkPropertyType, createProperty);
propertyRoutes.delete("/:id", authenticateUser, deletePropertyRules(), validateRequest, checkProperty, deleteProperty);
propertyRoutes.put("/:id", authenticateUser, updatePropertyRules(), validateRequest, checkProperty, updateProperty);