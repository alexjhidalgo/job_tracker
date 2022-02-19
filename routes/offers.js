const router = require("express").Router();
const pool = require("../db_config");

// Get single posting
router.get("/:offer_number", function (req, res, next) {
  let { offer_number } = req.params;
  const text =
    "SELECT id, account_id, posting_id, salary, benefits, options, bonus FROM public.job_offers WHERE account_id = $1 AND id = $1";
  pool.query(text, [offer_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

// Create new posting
router.post("/", (req, res) => {
  res.send(`Here is placeholder code for creating a new job offer`);
});

// Delete a posting
router.delete("/:offer_number", (req, res) => {
  let { offer_number } = req.params;
  res.send(`Here is placeholder code for deleting an offer ${offer_number}`);
});

module.exports = router;
