require("dotenv").config();
const express = require("express");

const { Client } = require("pg");
const client = new Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
});
client.connect();

const app = express();

app.use("/account", require("./routes/account"));
app.use("/posting", require("./routes/posting"));
app.use("/postings", require("./routes/postings"));

// Local port 3000 is used by client
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
