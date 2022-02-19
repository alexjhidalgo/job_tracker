const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
app.use("/account", require("./routes/account"));
app.use("/posting", require("./routes/posting"));
app.use("/postings", require("./routes/postings"));
app.use("/resume", require("./routes/resume"));
app.use("/offers", require("./routes/offers"));
app.use("/skills", require("./routes/skills"));
// Local port 3000 is used by client
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
