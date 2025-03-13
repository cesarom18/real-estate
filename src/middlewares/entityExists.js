import { Property } from "../models/PropertyModel.js";
import { User } from "../models/UserModel.js";
import { PropertyType } from "../models/PropertyTypeModel.js";

export const checkUser = async (req, res, next) => {
    const id = req.body.userId || req.params.id;
    const user = await User.findByPk(id);

    if (user === null) {
        return res.status(404).json({
            msg: "user not registered in the database"
        });
    }
    next();
}

export const checkProperty = async (req, res, next) => {
    const id = req.body.propertyId || req.params.id;
    const property = await Property.findByPk(id);
    if (property === null) {
        return res.status(404).json({
            msg: "property not registered in the database"
        });
    }
    next();
}

export const checkPropertyType = async (req, res, next) => {
    const id = req.body.propertyTypeId || req.params.id;
    const propertyType = await PropertyType.findByPk(id);
    if (propertyType === null) {
        return res.status(404).json({
            msg: "property type not registered in the database"
        });
    }
    next();
}