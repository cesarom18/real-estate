import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const UserRol = sequelize.define("UserRol",
    {
        name: {
            type: DataTypes.ENUM("admin", "client", "agent"),
            allowNull: false,
            defaultValue: "client"
        }
    },
    {
        tableName: "UserRoles",
        timestamps: false,
    }
);