const router = require("express").Router();
const pool = require("../db_config");

// Get single resume
router.get("/:resume_number", function (req, res, next) {
  let { resume_number } = req.params;
  const text =
    "SELECT id, account_id, resume_link FROM public.resumes WHERE account_id = $1 AND id = $1";
  pool.query(text, [resume_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Create new resume
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for adding a new resume`);
});

// Delete a resume
router.delete("/:resume_number", (req, res) => {
  let { resume_number } = req.params;
  let sql = "DELETE FROM public.resumes WHERE account_id = $1 AND id = $1";
  pool.query(sql, [resume_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
    console.log(`Resume ${application_number} deleted`);
  });
});

module.exports = router;
