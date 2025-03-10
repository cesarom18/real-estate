import { PropertyType } from "./PropertyTypeModel.js";
import { Property } from "./PropertyModel.js";
import { User } from "./UserModel.js";
import { UserRol } from "./UserRolModel.js";
import { PropertyTransaction } from "./PropertyTransactionModel.js";

export const setupAssociations = () => {
    User.belongsTo(UserRol, {
        foreignKey: {
            name: "userRolId"
        }
    });

    Property.belongsTo(User, {
        foreignKey: {
            name: "userId"
        }
    });
    Property.belongsTo(PropertyType, {
        foreignKey: {
            name: "propertyTypeId"
        }
    });

    PropertyTransaction.belongsTo(Property, {
        foreignKey: {
            name: "propertyId"
        }
    });
    PropertyTransaction.belongsTo(User, {
        foreignKey: {
            name: "userId"
        }
    })
}