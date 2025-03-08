import { validationResult } from "express-validator";

import { User } from "../models/UserModel.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        console.log("[INFO-SV]: Success Getting Users");
        res.status(200).json(users);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting Users\n ${error}`);
        res.status(500).json({
            msg: "Error getting users"
        });
    }
}

// TODO Fix Bug When Creating Invalid User (Skip ID's), Probably DB Reason Or Validations
export const createUser = async (req, res) => {
    try {
        const { errors } = validationResult(req);
        // Check If Request Have Some Error
        if (errors.length != 0) {
            return res.status(400).json({
                msg: errors[0].msg
            });
        }

        await User.create(req.body);
        res.status(201).json({
            msg: "User created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating User\n ${error}`);
        res.status(500).json({
            msg: "Error creating user"
        });
    }
}

// TODO Fix Bug When Trying To Delete A User That Doesn't Exist
export const deleteUser = async (req, res) => {
    try {
        const { errors } = validationResult(req);
        // Check If Request Have Some Error
        if (errors.length != 0) {
            return res.status(400).json({
                msg: errors[0].msg
            });
        }

        const { id } = req.params;

        await User.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            msg: "User deleted successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Deleting User\n ${error}`);
        res.status(500).json({
            msg: "Error deleting user"
        });
    }
};