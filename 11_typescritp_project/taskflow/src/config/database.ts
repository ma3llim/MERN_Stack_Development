import mongoose from "mongoose";
import { env } from "../env";
import logger from "../utils/logger";

const connectDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(env.DATABASE_URL);
        logger.info(`🛠️  MONGODB Connected! DB HOST: ${connectionInstance.connection.host} DB NAME: ${connectionInstance.connection.db?.databaseName}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error("💀  MONGODB CONNECTION ERROR", error);
        } else {
            logger.error("💀  MONGODB CONNECTION ERROR", String(error));
        }
    }
};

export default connectDatabase;
