import { DataTypes } from "sequelize";

import { sequelize } from "../config/db.js";

export const PropertyTransaction = sequelize.define("PropertyTransaction",
    {
        transactionDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["Credit Card", "Debit Card", "Bank Transfer"]]
            }
        },
        // ? Column 'paymentStatus' Will Be Included After Knowing How The Payments Will Be Managed
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "property_transactions",
        timestamps: false
    }
);