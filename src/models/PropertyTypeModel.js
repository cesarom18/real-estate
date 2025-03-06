import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const PropertyType = sequelize.define("PropertyType",
    {
        name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isIn: [[
                    "House", "Apartment", "Condo",
                    "Duplex", "Office", "Penthouse"
                ]]
            }
        }
    },
    {
        tableName: "property_types",
        timestamps: false,
        underscored: true
    }
);