import mongoose from "mongoose";
import dns from "node:dns";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        // Local DNS proxies can refuse the SRV lookups required by Atlas.
        const dnsServers = dns.getServers();
        if (dnsServers.length > 0 && dnsServers.every((server) =>
            server.startsWith("127.") || server === "::1"
        )) {
            dns.setServers(["1.1.1.1", "8.8.8.8"]);
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: DB_NAME,
            serverSelectionTimeoutMS: 10000,
        });
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
