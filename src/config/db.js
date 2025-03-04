import { Sequelize } from "sequelize";

// Create Sequelize Instance To Connect MariaDB
const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST
} = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: "mariadb",
        logging: false // Disable Query Logs
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate(); // Wait For DB Authentication
        console.log("[INFO-DB]: DB Connection Has Been Established Successfully");
    } catch (error) {
        console.log(`[INFO-DB]: Unable To Connect To The DB\n ${error}`);
    }
}