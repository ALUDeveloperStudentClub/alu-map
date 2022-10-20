import mongoose from "mongoose";
import { appconfigfile } from "../config/appconfig";
import { logger } from "./logger";


mongoose.connect( appconfigfile.db.uri );

mongoose.connection.once("connected", () => {
    logger.info("mongodb connected");
})