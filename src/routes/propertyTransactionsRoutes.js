import { Router } from "express";

import {
    getPropTranByUser,
    createPropTran
} from "../controllers/propertyTransactionController.js";
import {
    validateRequest,
    getPropTranUserRules,
    createPropTranRules
} from "../middlewares/validateRequest.js";
import {
    checkUser,
    checkProperty
} from "../middlewares/entityExists.js";
import { authenticateUser } from "../middlewares/authenticateUser.js";

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/:id", authenticateUser, getPropTranUserRules(), validateRequest, checkUser, getPropTranByUser);
propertyTransactionRoutes.post("/", authenticateUser, createPropTranRules(), validateRequest, checkUser, checkProperty, createPropTran);