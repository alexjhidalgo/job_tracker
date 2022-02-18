const router = require("express").Router();
const pool = require("../db_config");

// Get single application
router.get("/:application_number", function (req, res, next) {
  let { application_number } = req.params;
  const text =
    'SELECT "Id", "Account_Id", "Status", "Date_Added", "Notes", "Company", "Position", "Description", "Salary" FROM public."Applications" WHERE "Account_Id" = $1 AND "Id" = $1';
  pool.query(text, [application_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Application ${application_number} loaded`);
  });
});

// Create new application_number
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for adding a new job application_number`);
});

// Delete an application
router.delete("/:application_number", (req, res) => {
  let { applications_number } = req.params;
  let sql = 'DELETE FROM public."Applications" WHERE "Account_Id" = $1 AND "Id" = $1';
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Application ${application_number} deleted`);
  });
});
module.exports = router;
