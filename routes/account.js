const router = require("express").Router();
const pool = require("../db_config");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//Account Service Functions

const hashPasswordFunction = async(password) => {
  return await bcrypt.hash(password,8)
}
const isMatch = async(userPassword,existingPassord) =>
{
  return await bcrypt.compare(userPassword,existingPassord)
}

const generateAuthToken = async(id) => {
  return jwt.sign({ _id: id.toString()},'cs467capstone')
}  



////// Account C.R.U.D.

router.get("/:account_number", function (req, res, next) {
  let { account_number } = req.params;
  const text = 'SELECT "Id", "Username", "Password", "Email" FROM "Accounts" WHERE "Id" = $1';
  pool.query(text, [account_number], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post("/", (req, res) => {
  let { username, password, email } = req.body;
  const text = 'INSERT INTO public."Accounts"("Id", "Username", "Password", "Email") VALUES ((SELECT "Id" + 1 FROM public."Accounts" order by "Id" desc limit 1), $1, $2, $3);'
  const hashedPassword = hashPasswordFunction(req.body.password).then(hashedPassword => {
      pool.query(text, [username,hashedPassword,email], (err, result) => {
          if (err) {
            console.log(err);
            res.status(400).send(err);
          }
          res.status(200).send("Account Created");
        });
  })
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  const text = 'SELECT "Id","Password" FROM public."Accounts" where "Username" = $1;'    
  pool.query(text, [username], (err, result) => {
      if (err) {
          console.log(err);
          res.status(400).send(err);
          }
      isMatch(req.body.password,result.rows[0].Password).then(match =>
      {
          console.log(match)
          if(match){
              generateAuthToken(result.rows[0].Id).then(token => {
                  res.status(200).send({"messege": "Log In Successful","jwt":token});
              }
            )       
          } else {
              res.status(400).send("Incorrect username or password");
          }      
      }
    )
  })
});

router.delete("/:account_number", (req, res) => {
  let { account_number } = req.params;
  res.send(`Here is placeholder code for deleting account ${account_number}`);
});

module.exports = router;
