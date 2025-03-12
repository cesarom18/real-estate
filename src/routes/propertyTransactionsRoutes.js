import { Router } from "express";

import {
    getPropertyTransactions,
    createPropertyTransaction
} from "../controllers/propertyTransactionController.js";
import {
    validateRequest,
    createPropertyTransactionRules
} from "../middlewares/validateRequest.js";

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/", getPropertyTransactions);
propertyTransactionRoutes.post("/", createPropertyTransactionRules(), validateRequest, createPropertyTransaction);