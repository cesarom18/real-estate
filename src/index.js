import express from "express";

import { sequelize, connectDB } from "./config/db.js";
import { setupAssociations } from "./models/associations.js";

// Create Server App With Express
const app = express();

// DB Setup And Configuration
connectDB();
sequelize.sync({ force: true, alter: true }) // TODO: Change 'force' Property To False When DB Model Get Finished
    .then(() => console.log("[INFO-DB] Synchronized DB and tables"))
    .catch((error) => console.log(`[INFO-DB] Error Synchronizing DB And Tables\n ${error}`));
setupAssociations();

// Server Port Listener
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`[INFO-SV]: Server Running On Port ${port}`);
});