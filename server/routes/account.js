const router = require("express").Router();

////// Account C.R.U.D.

router.get("/account/:account_number", function (req, res, next) {
  let { account_number } = req.params;
  const text = 'SELECT "Id", "Username", "Password", "Email" FROM public."Accounts" WHERE "Id" = $1';
  client.query(text, [account_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post("/account", (req, res) => {
  res.send(`Here is placeholder code for creating an account`);
});

router.delete("/account/:account_number", (req, res) => {
  let { account_number } = req.params;
  res.send(`Here is placeholder code for deleting account ${account_number}`);
});

module.exports = router;
