import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const Property = sequelize.define("Property",
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numRooms: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        numBaths: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mt2: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        propertyTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "Properties",
        timestamps: true
    }
);