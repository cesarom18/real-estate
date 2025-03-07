import { Router } from "express";

import {
    getPropertyTransactions
} from "../controllers/propertyTransactionController.js";

export const propertyTransactionRoutes = Router();

propertyTransactionRoutes.get("/", getPropertyTransactions);