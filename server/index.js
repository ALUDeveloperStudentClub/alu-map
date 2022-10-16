const express = require("express");
const app = express();

//Port configuration
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on ${port}...`));
