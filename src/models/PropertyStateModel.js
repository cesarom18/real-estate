import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const PropertyState = sequelize.define("PropertyState",
    {
        name: {
            type: DataTypes.ENUM(
                "Available",
                "Under_Negotiation",
                "Reserved",
                "Sold",
                "Rented",
                "Off_Market",
                "Expired"
            ),
            allowNull: false,
            defaultValue: "Available"
        }
    },
    {
        tableName: "PropertyStates",
        timestamps: false
    }
);