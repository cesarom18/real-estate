import { connectDB } from "../src/config/db.js";
import { PropertyType } from "../src/models/PropertyTypeModel.js";
import { UserRol } from "../src/models/UserRolModel.js";

async function initializeDb() {
    try {
        console.log("[INFO-DB] Initializing DB...");
        // * Insert Initial User Roles Records ('admin', 'client', 'agent')
        await UserRol.bulkCreate([
            { name: "admin" },
            { name: "client" },
            { name: "agent" }
        ]);
        // * Insert Initial Property Types Records
        await PropertyType.bulkCreate([
            { name: "House" },
            { name: "Apartment" },
            { name: "Condo" },
            { name: "Duplex" },
            { name: "Office" },
            { name: "Penthouse" },
        ]);
        console.log("[INFO-DB] Initial Records Successfully Inserted");
    } catch (error) {
        console.log(`[INFO-DB] Error Trying Initialize DB\n ${error}`);
    }
}

connectDB();
initializeDb();