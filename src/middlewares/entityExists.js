import { Property } from "../models/PropertyModel.js";
import { User } from "../models/UserModel.js";

export const checkUser = async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    if (user === null) {
        return res.status(404).json({
            msg: "user not registered in the database"
        });
    }
    next();
}

export const checkProperty = async (req, res, next) => {
    const property = await Property.findByPk(req.params.id);
    if (property === null) {
        return res.status(404).json({
            msg: "property not registered in the database"
        });
    }
    next();
}