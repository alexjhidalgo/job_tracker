const router = require("express").Router();
const pool = require("../db_config");
// TODO: add verify JWT middleware for all routes

// Get all contacts belonging to user
router.get("/", (req, res) => {
  const allContactsQuery = "SELECT * FROM contacts WHERE account_id = $1";
  // TODO: replace values with account_id from middleware verifying JWT
  pool.query(allContactsQuery, [1], (err, result) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).send(result.rows);
  });
});

// Add new contact
router.post("/", (req, res) => {
  const insertQuery =
    "INSERT INTO contacts " +
    "(account_id, name, company, position, email, phone_number, notes) " +
    "VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;";
  const values = [
    // TODO: replace below with account_id from middleware verifying JWT
    1,
    req.body.name,
    req.body.company,
    req.body.position,
    req.body.email,
    req.body.number,
    req.body.notes,
  ];

  pool.query(insertQuery, values, (err, result) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ id: result.rows[0].id });
  });
});

// Update existing contact
router.put("/", (req, res) => {
  const updateQuery =
    "UPDATE contacts SET " +
    "(name, company, position, email, phone_number, notes) " +
    "= ($1, $2, $3, $4, $5, $6) WHERE id = $7;";
  const values = [
    req.body.name,
    req.body.company,
    req.body.position,
    req.body.email,
    req.body.number,
    req.body.notes,
    req.body.id,
  ];

  pool.query(updateQuery, values, (err, results) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ message: "update success" });
  });
});

// Delete existing contact
router.delete("/:id", (req, res) => {
  const deleteQuery = "DELETE FROM contacts WHERE id = $1;";
  const values = [req.params.id];

  pool.query(deleteQuery, values, (err, result) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ message: "delete success" });
  });
});

module.exports = router;
