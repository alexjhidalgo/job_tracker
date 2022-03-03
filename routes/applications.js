const router = require("express").Router();
const pool = require("../db_config");
const auth = require("../middleware/auth");

// Create new application
router.post("/", auth, (req, res) => {  
  const account_id = res.locals.user.id
    const insertQuery =
      'INSERT INTO "applications" ("status", "date_added", "notes", "company", "position", "description", "salary","account_id") VALUES ($1, $2, $3, $4, $5, $6, $7,$8);';
    const values = [
      req.body.status,
      req.body.date_added,
      req.body.notes,
      req.body.company,
      req.body.position,
      req.body.description,
      req.body.salary,
      account_id,
    ];
  
    pool.query(insertQuery, values, (err, result) => {
      if (err) return res.status(400).json({ error: err });
      res.status(200).json({ messege : "application created"});
    });
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
router.put("/:application_id", auth, (req, res) => {
  const { application_id } = req.params;    
  const updateQuery =
    'UPDATE "applications" SET ("status", "date_added", "notes", "company", "position", "description", "salary") = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8;';
  const values = [
    req.body.status,
    req.body.date_added,
    req.body.notes,
    req.body.company,
    req.body.position,
    req.body.description,
    req.body.salary,
    application_id,
  ];

  pool.query(updateQuery, values, (err, results) => {
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ message: "update success" });
  });
});

// Get multiple applications
router.get("/", auth,  function (req, res, next) { 
  const account_id = res.locals.user.id                      
  const text =                                                 
  "SELECT status, date_added, notes, company, position, description, salary FROM applications WHERE account_id = $1";
  pool.query(text, [account_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Delete an application
router.delete("/:applications_number", auth,  (req, res) => {
  let { applications_number } = req.params;
  let sql = "DELETE FROM applications WHERE id = $1";
  pool.query(sql, [applications_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(204).send({"result": "Application successfully deleted"});
  });
});

// Delete all applications
router.delete("/", auth,  (req, res) => {
  const account_id = res.locals.user.id      
  let sql =  "DELETE FROM applications WHERE account_id = $1";
  pool.query(sql, [account_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(204).send({"result": "Applications successfully deleted"});
  });
});

module.exports = router;
