import { ValidationError } from "sequelize";

import { Property } from "../models/PropertyModel.js";

export const getProperties = async (req, res) => {
    try {
        const { page } = req.query;
        const properties = await Property.findAll({
            offset: (page - 1) * 5,
            limit: page * 5
        });
        console.log("[INFO-SV]: Success Getting Properties");
        res.status(200).json(properties);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting Properties\n ${error}`);
        res.status(500).json({
            msg: "Error getting properties"
        });
    }
}

export const getPropertyById = async (req, res) => {
    try {
        const property = await Property.findByPk(req.params.id);
        console.log("[INFO-SV]: Success Getting Property");
        res.status(200).json(property);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting Property\n ${error}`);
        res.status(500).json({
            msg: "error getting property"
        });
    }
}

export const createProperty = async (req, res) => {
    try {
        await Property.create(req.body);
        console.log("[INFO-SV]: Success Creation Property");
        res.status(201).json({
            msg: "property created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating Property\n ${error}`);
        res.status(500).json({
            msg: "error creating property"
        });
    }
}

export const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        await Property.update(req.body, {
            where: {
                id
            }
        });
        console.log("[INFO-SV]: Success Updating Property");
        res.status(201).json({
            msg: "property updated successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Updating Property\n ${error}`);
        // If Is A Validation/Constraint DB Error 
        if (error instanceof ValidationError) {
            return res.status(400).json({
                msg: error.errors[0].message
            });
        }
        res.status(500).json({
            msg: "error updating property"
        });
    }
}

export const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        await Property.destroy({
            where: {
                id
            }
        });
        console.log("[INFO-SV]: Success Deleting Property");
        res.status(201).json({
            msg: "property deleted successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Deleting Property\n ${error}`);
        res.status(500).json({
            msg: "error deleting property"
        });
    }
}