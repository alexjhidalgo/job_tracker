const router = require("express").Router();

// Get single posting
router.get("/:posting_number", function (req, res, next) {
  let { posting_number } = req.params;
  const text =
    'SELECT "Id", "Company", "Position", "Description", "Salary", "Deadline", "Account_Id" FROM public."Postings" WHERE "Account_Id" = $1 AND "Id" = $1';
  client.query(text, [posting_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Create new posting
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for creating a new job posting`);
});

// Delete a posting
router.delete("/:posting_number", (req, res) => {
  let { posting_number } = req.params;
  res.send(`Here is placeholder code for deleting a posting ${posting_number}`);
});

module.exports = router;
