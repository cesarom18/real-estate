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
} from "../middlewares/validateRequest.js";
import { checkProperty } from "../middlewares/entityExists.js";

export const propertyRoutes = Router();

propertyRoutes.get("/", getProperties);
propertyRoutes.post("/", createPropertyRules(), createProperty);
propertyRoutes.delete("/:id", deletePropertyRules(), checkProperty, deleteProperty);
propertyRoutes.put("/:id", updatePropertyRules(), checkProperty, updateProperty);