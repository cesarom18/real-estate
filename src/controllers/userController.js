import { ValidationError } from "sequelize";

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

export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        console.log("[INFO-SV]: Success Getting User");
        res.status(200).json(user);
    } catch (error) {
        console.log(`[INFO-SV]: Error Getting User\n ${error}`);
        res.status(500).json({
            msg: "error getting user"
        });
    }
}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log("[INFO-SV]: Success Creating User");
        res.status(201).json({
            msg: "user created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating User\n ${error}`);
        // If Is A Validation/Constraint DB Error 
        if (error instanceof ValidationError) {
            return res.status(400).json({
                msg: error.errors[0].message
            });
        }
        res.status(500).json({
            msg: "error creating user"
        });
    }
}

export const deleteUser = async (req, res) => {
    try {
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