const router = require("express").Router();

// Get all postings
router.get("/postings/:postings_number", function (req, res, next) {
  let { postings_number } = req.params;
  const text =
    'SELECT "Id", "Company", "Position", "Salary", "Deadline" FROM public."Postings" WHERE "Account_Id" = $1';
  client.query(text, [postings_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Delete all postings
router.delete("/postings/:postings_number", (req, res) => {
  let { postings_number } = req.params;
  res.send(`Here is placeholder code for deleting all postings ${postings_number}`);
});

module.exports = router;
