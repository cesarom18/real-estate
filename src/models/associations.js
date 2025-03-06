import { PropertyState } from "./PropertyStateModel.js";
import { PropertyType } from "./PropertyTypeModel.js";
import { Property } from "./PropertyModel.js";
import { User } from "./UserModel.js";
import { UserRol } from "./UserRolModel.js";

export const setupAssociations = () => {
    User.belongsTo(UserRol, {
        foreignKey: {
            name: "userRolId"
        }
    });

    Property.belongsTo(PropertyState, {
        foreignKey: {
            name: "propertyStateId"
        }
    });
    Property.belongsTo(PropertyType, {
        foreignKey: {
            name: "propertyTypeId"
        }
    });
}