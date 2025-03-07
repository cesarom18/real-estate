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

export const createUser = async (req, res) => {
    try {
        const { name, email, password, userRol } = req.body;

        await User.create({
            name,
            email,
            password,
            userRolId: userRol
        });
        res.status(200).json({
            msg: "User created successfully"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Creating User\n ${error}`);
        res.status(500).json({
            msg: "Error creating user"
        });
    }
}