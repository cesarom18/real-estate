import { genSalt, hash } from "bcryptjs";

import { User } from "../models/UserModel.js";
import { UserRol } from "../models/UserRolModel.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, userRolId } = req.body; // Password Is Already Checheck With validateRequest Middleware

        // Check If UserRol ID Exist
        const userRol = await UserRol.findByPk(userRolId);
        if (!userRol) return res.status(404).json({
            msg: "user rol not registered in the database"
        });
        // Check If Any User Has The Same Email
        const existEmail = await User.findOne({
            where: {
                email
            }
        });
        if (existEmail) return res.status(400).json({
            msg: "user email is already registered in the database"
        });

        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        await User.create({
            name,
            email,
            password: hashedPassword,
            userRolId
        });
        console.log("[INFO-SV]: Success Signing Up User");
        res.status(200).json({
            msg: "success signing up user"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Signing Up User\n ${error}`);
        res.status(500).json({
            msg: "error signing up user"
        });
    }
}