import { validationResult } from "express-validator";

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
        const { errors } = validationResult(req);
        // Check If Request Have Some Error
        if (errors.length != 0) {
            return res.status(400).json({
                msg: errors[0].msg
            });
        }

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
        const { errors } = validationResult(req);
        // Check If Request Have Some Error
        if (errors.length != 0) {
            return res.status(400).json({
                msg: errors[0].msg
            });
        }

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
        res.status(500).json({
            msg: "error updating property"
        });
    }
}

export const deleteProperty = async (req, res) => {
    try {
        const { errors } = validationResult(req);
        // Check If Request Have Some Error
        if (errors.length != 0) {
            return res.status(400).json({
                msg: errors[0].msg
            });
        }

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