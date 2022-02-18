const router = require("express").Router();
const pool = require("../db_config");

// Get multiple applications
router.get("/:applications_number", function (req, res, next) { //"/applications_number" can refer to filters for applications
  let { applications_number } = req.params;                         // 1=all, 2=submitted, 3=unsubmitted etc.
  const text =                                                  // or WHERE "Status" = ...
  'SELECT "Account_Id", "Status", "Date_Added", "Notes", "Company", "Position", "Description", "Salary" FROM public."Applications" WHERE "Account_Id" = $1';
  pool.query(text, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(result.affectedRows + " application(s) loaded");
  });
});

// Delete all applications
router.delete("/:applications_number", (req, res) => {
  let { applications_number } = req.params;
  let sql = 'DELETE FROM public."Applications" WHERE "Account_Id" = $1';
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
