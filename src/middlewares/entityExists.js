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