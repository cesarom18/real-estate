import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const User = sequelize.define("User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userRolId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "users",
        timestamps: false,
        underscored: true
    }
);