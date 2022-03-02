const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/account", require("./routes/account"));
app.use("/applications", require("./routes/applications"));
app.use("/resume", require("./routes/resume"));
app.use("/skills", require("./routes/skills"));
app.use("/contacts", require("./routes/contacts"));

// Local port 3000 is used by client
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
