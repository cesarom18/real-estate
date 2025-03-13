import { Router } from "express";

import {
    getPropertyTransactionByUser,
    createPropertyTransaction
} from "../controllers/propertyTransactionController.js";
import {
    validateRequest,
    createPropertyTransactionRules,
    getUserPropertyTransactionsRules
} from "../middlewares/validateRequest.js";
import {
    checkUser,
    checkProperty
} from "../middlewares/entityExists.js";

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/:id", getUserPropertyTransactionsRules(), validateRequest, checkUser, getPropertyTransactionByUser);
propertyTransactionRoutes.post("/", createPropertyTransactionRules(), validateRequest, checkUser, checkProperty, createPropertyTransaction);