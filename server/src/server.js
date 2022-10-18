import dotenv from "dotenv";
dotenv.config();
import express from "express";

// initialize express application
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	return res.json({ success: true, message: "Well done. Nice Catch." });
});

app.get("*", (req, res) => {
	return res.json({ success: false, message: "Route not configured yet." });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
	console.log(`Server is running in: http://localhost:${PORT}`)
);
