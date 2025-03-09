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
            msg: "error getting users"
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
        console.log("[INFO-SV]: Success Creating User");
        res.status(201).json({
            msg: "user created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating User\n ${error}`);
        res.status(500).json({
            msg: "error creating user"
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
        });
        console.log("[INFO-SV]: Success Deleting User");
        res.status(200).json({
            msg: "user deleted successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Deleting User\n ${error}`);
        res.status(500).json({
            msg: "error deleting user"
        });
    }
};