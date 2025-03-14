import express from "express";
import rateLimiter from "express-rate-limit";

import { sequelize, connectDB } from "./config/db.js";
import { setupAssociations } from "./models/associations.js";
import {
    userRoutes,
    propertyRoutes,
    propertyTransactionRoutes,
    authRoutes
} from "./routes/index.js";

// Create Server App With Express
const app = express();

// Global Middlewares
app.use(express.json()); // Accept JSON Body Request
app.use(express.urlencoded({ extended: true })); // Accept Form Data
app.use(rateLimiter({ // Request Limiter
    windowMs: 15 * 60 * 1000, // 15 Min Of Restriction
    max: 100, // Max 100 Request Per IP
    headers: true, // Enable Header Limiter Feedback
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next) => {
        res.status(429).json({
            error: "too many request from this IP, try later", // Error Message
        });
    },
    keyGenerator: (req, res) => req.ip, // Identify Users For His IP
}));

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
app.use("/api/auth", authRoutes);;

// Server Port Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[INFO-SV]: Server Running On Port ${port}`);
});