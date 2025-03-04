import { Sequelize } from "sequelize";

// Create Sequelize Instance To Connect MariaDB
const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST
} = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: "mariadb",
        logging: false // Disable Query Logs
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate(); // Wait For DB Authentication
        console.log("[INFO-DB]: DB Connection has been established successfully");
    } catch (error) {
        console.log(`[INFO-DB]: Unable to connect to the DB\n ${error}`);
    }
}