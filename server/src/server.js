import express from "express";
import { appconfigfile } from "./config/appconfig.js";
import { logger } from "./services/logger.js";

// initialize express application
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	return res.json({ success: true, message: "Well done. Nice Catch." });
});

app.get("*", (req, res) => {
	return res.json({ success: false, message: "Route not configured yet." });
});

const PORT = appconfigfile.app.port;
app.listen(PORT, () =>
  logger.info(`Server is running in: http://localhost:${PORT}`)
);
