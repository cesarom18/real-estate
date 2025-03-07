import { Property } from "../models/PropertyModel.js";

export const getProperties = async (req, res) => {
    try {
        const properties = await Property.findAll();
        console.log("[INFO-SV]: Success Getting Properties");
        res.status(200).json(properties);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting Properties\n ${error}`);
        res.status(500).json({
            msg: "Error getting properties"
        });
    }
}

export const createProperty = async (req, res) => {
    try {
        await Property.create(req.body);
        res.status(201).json({
            msg: "Property created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating Property\n ${error}`);
        res.status(500).json({
            msg: "Error creating property"
        });
    }
}

// TODO Fix Bug When Trying To Delete A Property That Doesn't Exist
export const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;

        await Property.destroy({
            where: {
                id
            }
        });
        res.status(201).json({
            msg: "Property deleted successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Deleting Property\n ${error}`);
        res.status(500).json({
            msg: "Error deleting property"
        });
    }
}