import { Router } from "express";

import {
    getPropertyTransactions,
    createPropertyTransaction
} from "../controllers/propertyTransactionController.js";
import {
    validateRequest,
    createPropertyTransactionRules
} from "../middlewares/validateRequest.js";
import {
    checkUser,
    checkProperty
} from "../middlewares/entityExists.js";

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/", getPropertyTransactions);
propertyTransactionRoutes.post("/", createPropertyTransactionRules(), validateRequest, checkUser, checkProperty, createPropertyTransaction);