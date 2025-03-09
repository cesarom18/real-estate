import { PropertyTransaction } from "../models/PropertyTransactionModel.js";

export const getPropertyTransactions = async (req, res) => {
    try {
        const transactions = await PropertyTransaction.findAll();
        console.log("[INFO-SV]: Success Getting Property Transactions");
        res.status(200).json(transactions);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting Property Transactions\n ${error}`);
        res.status(500).json({
            msg: "error getting property transactions"
        });
    }
}