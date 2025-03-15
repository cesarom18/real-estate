import { genSalt, hash, compare } from "bcryptjs";

import { User } from "../models/UserModel.js";
import { UserRol } from "../models/UserRolModel.js";
import { generateJWT } from "../utils/generateJWT.js";

export const signUp = async (req, res) => {
    try {
        const { name, email, password, userRolId } = req.body; // Password Is Already Checheck With validateRequest Middleware
        // Check If UserRol ID Exist
        const userRol = await UserRol.findByPk(userRolId);
        if (!userRol) return res.status(404).json({
            msg: "user rol not registered in the database"
        });
        // Check If Any User Has The Same Email
        const user = await User.findOne({
            where: {
                email
            }
        });
        if (user) return res.status(400).json({
            msg: "user email is already registered in the database"
        });
        // Hash Password And Create User
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);
        const { id: userId } = await User.create({
            name,
            email,
            password: hashedPassword,
            userRolId
        });
        generateJWT(userId, res); // Generate JWT And Set Cookies
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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check If Doesn't Exist Or Password Is Incorrect
        const { id: userId, email: userEmail, password: userPassword } = await User.findOne({
            where: {
                email
            }
        });
        const isPasswdEqual = await compare(password, userPassword);
        if (!userEmail || !isPasswdEqual) return res.status(404).json({
            msg: "user email or password are not correct"
        });
        generateJWT(userId, res); // Generate JWT And Set Cookies
        console.log("[INFO-SV]: Success Logging User");
        res.status(200).json({
            msg: "success logging user"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Logging User\n ${error}`);
        res.status(500).json({
            msg: "error logging user"
        });
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 }) // Clear JWT
        console.log("[INFO-SV]: Success Logging Out User");
        res.status(200).json({
            msg: "success logging out user"
        });
    } catch (error) {
        console.log(`[INFO-SV]: Error Logging Out User\n ${error}`);
        res.status(500).json({
            msg: "error logging out user"
        });
    }
}