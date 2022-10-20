const mongoose = require("mongoose");

// eslint-disable-next-line no-undef
const appconfigfile = { db: { uri: MONGO_DB_URI(from.env || docker_img) } };

mongoose
  .connect(appconfigfile.db.uri, {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
  })
  .then((result) => console.log("Connected to mongodb..."))
  .catch((err) => console.log(err));
