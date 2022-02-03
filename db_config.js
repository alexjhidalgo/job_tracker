require("dotenv").config();
const { Pool } = require("pg");

const credentials = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASS,
  port: process.env.PG_PORT,
};

const pool = new Pool(credentials);
pool.connect();

module.exports = pool;
