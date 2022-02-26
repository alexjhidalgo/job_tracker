const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/account", require("./routes/account"));
app.use("/posting", require("./routes/posting"));
app.use("/postings", require("./routes/postings"));
app.use("/resume", require("./routes/resume"));
app.use("/offers", require("./routes/offers"));
app.use("/skills", require("./routes/skills"));
app.use("/contacts", require("./routes/contacts"));

// Local port 3000 is used by client
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
