const router = require("express").Router();
const pool = require("../db_config");
const auth = require("../middleware/auth");

// Create new application
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for adding a new job application_number`);
});

//Get Count of Applications
router.get("/count",auth, function (req, res) {
  const account_id = res.locals.user.id
  const text =
    'SELECT count("id") from "applications" where "account_id" = $1;'
  pool.query(text, [account_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});


// Get single application
router.get("/:application_number", auth,  function (req, res, next) {
  let { application_number } = req.params;
  const text =
    "SELECT status, date_added, notes, company, position, description, salary FROM applications WHERE id = $1";
  pool.query(text, [application_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Application ${application_number} loaded`);
  });
});

// Update an application
router.put("/", auth, (req, res) => {
  const text =
    "UPDATE applications SET (status, date_added, notes, company, position, description, salary) = ($1, $2, $3, $4, $5, $6) WHERE id = $7;";
  const values = [
    req.body.status,
    req.body.date_added,
    req.body.notes,
    req.body.company,
    req.body.position,
    req.body.description,
    req.body.salary,
  ];

  pool.query(updateQuery, values, (err, results) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ message: "update success" });
  });
});

// Get multiple applications
router.get("/:applications_number", auth,  function (req, res, next) { 
  let { applications_number } = req.params;                         
  const text =                                                 
  "SELECT status, date_added, notes, company, position, description, salary FROM applications";
  pool.query(text, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(result.affectedRows + " application(s) loaded");
  });
});

// Delete an application
router.delete("/:application_number", auth,  (req, res) => {
  let { applications_number } = req.params;
  let sql = "DELETE FROM applications WHERE id = $1";
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(204).send({"result": "Application successfully deleted"});
    console.log(`Application ${application_number} deleted`);
  });
});

// Delete all applications
router.delete("/:applications_number", auth,  (req, res) => {
  let { applications_number } = req.params;
  let sql =  "DELETE FROM applications";
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(204).send({"result": "Applications successfully deleted"});
    console.log(result.affectedRows + " application(s) deleted");
  });
});

module.exports = router;
