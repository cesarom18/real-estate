import { PropertyState } from "./PropertyStateModel.js";
import { PropertyType } from "./PropertyTypeModel.js"
import { User } from "./UserModel.js";
import { UserRol } from "./UserRolModel.js";

export const setupAssociations = () => {
    User.belongsTo(UserRol, {
        foreignKey: {
            name: "userRolId"
        }
    });
}