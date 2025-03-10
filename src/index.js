import express from "express";

import { sequelize, connectDB } from "./config/db.js";
import { setupAssociations } from "./models/associations.js";
import {
    userRoutes,
    propertyRoutes,
    propertyTransactionRoutes
} from "./routes/index.js";

// Create Server App With Express
const app = express();

// Global Middlewares
app.use(express.json()); // Accept JSON Body Request
app.use(express.urlencoded({ extended: true })); // Accept Form Data

// DB Setup And Configuration
connectDB();
sequelize.sync({ force: false, alter: false })
    .then(() => console.log("[INFO-DB]: Synchronized DB and tables"))
    .catch((error) => console.log(`[INFO-DB]: Error Synchronizing DB And Tables\n ${error}`));
setupAssociations();

// Setup Routes
app.use("/api/user", userRoutes);
app.use("/api/property", propertyRoutes);
app.use("/api/property-transaction", propertyTransactionRoutes);

// Server Port Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[INFO-SV]: Server Running On Port ${port}`);
});