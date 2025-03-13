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

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/:id", getPropTranUserRules(), validateRequest, checkUser, getPropTranByUser);
propertyTransactionRoutes.post("/", createPropTranRules(), validateRequest, checkUser, checkProperty, createPropTran);