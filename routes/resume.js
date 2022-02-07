const router = require("express").Router();
const pool = require("../db_config");

// Get single posting
router.get("/:resume_number", function (req, res, next) {
  let { resume_number } = req.params;
  const text =
    'SELECT "Id", "Account_Id", "Resume_Link" FROM public."Resumes" WHERE "Account_Id" = $1 AND "Id" = $1';
  pool.query(text, [resume_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Create new posting
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for adding a new resume`);
});

// Delete a posting
router.delete("/:resume_number", (req, res) => {
  let { resume_number } = req.params;
  res.send(`Here is placeholder code for deleting a resume ${resume_number}`);
});

module.exports = router;
