require("dotenv").config();
const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL;

const pool = (() => {
  if (process.env.NODE_ENV === "production") {
    return new Pool({
      connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    });
  } else {
    return new Pool({
      connectionString,
      ssl: false,
    });
  }
})();

pool.connect();

module.exports = pool;
