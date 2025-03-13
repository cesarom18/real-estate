import { ValidationError } from "sequelize";

import { PropertyTransaction } from "../models/PropertyTransactionModel.js";

export const getPropTranByUser = async (req, res) => {
    try {
        const transactions = await PropertyTransaction.findAll({
            where: {
                userId: req.params.id
            }
        });
        console.log("[INFO-SV]: Success Getting User Property Transactions");
        res.status(200).json(transactions);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting User Property Transactions\n ${error}`);
        res.status(500).json({
            msg: "error getting user property transactions"
        });
    }
}

export const createPropTran = async (req, res) => {
    try {
        await PropertyTransaction.create(req.body);
        console.log("[INFO-SV]: Success Creating Property Transaction");
        res.status(200).json({
            msg: "property transaction created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating Property Transaction\n ${error}`);
        // If Is A Validation/Constraint DB Error 
        if (error instanceof ValidationError) {
            return res.status(400).json({
                msg: error.errors[0].message
            });
        }
        res.status(500).json({
            msg: "error creating property transaction"
        });
    }
}