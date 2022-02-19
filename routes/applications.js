const router = require("express").Router();
const pool = require("../db_config");

// Create new application
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for adding a new job application_number`);
});

// Get single application
router.get("/:application_number", function (req, res, next) {
  let { application_number } = req.params;
  const text =
    "SELECT id, account_id, status, date_added, notes, company, position, description, salary FROM public.applications WHERE account_id = $1 AND id = $1";
  pool.query(text, [application_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Application ${application_number} loaded`);
  });
});

// Get multiple applications
router.get("/:applications_number", function (req, res, next) { 
  let { applications_number } = req.params;                         
  const text =                                                 
  "SELECT account_id, status, date_added, notes, company, position, description, salary FROM public.applications WHERE account_id = $1";
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
router.delete("/:application_number", (req, res) => {
  let { applications_number } = req.params;
  let sql = "DELETE FROM public.applications WHERE account_id = $1 AND id = $1";
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Application ${application_number} deleted`);
  });
});

// Delete all applications
router.delete("/:applications_number", (req, res) => {
  let { applications_number } = req.params;
  let sql =  "DELETE FROM applications WHERE account_id = $1";
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(result.affectedRows + " application(s) deleted");
  });
});

module.exports = router;
