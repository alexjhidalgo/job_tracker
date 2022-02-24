const router = require("express").Router();
const pool = require("../db_config");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require("../middleware/auth");
//Account Service Functions

const hashPasswordFunction = async(password) => {
  return await bcrypt.hash(password,8)
}
const isMatch = async(userPassword,existingPassord) =>
{
  return await bcrypt.compare(userPassword,existingPassord)
}

const generateAuthToken =  async(payload) => {
  return  jwt.sign({ id: payload.id.toString(), username:payload.username.toString()},'cs467capstone')
}  

////// Account C.R.U.D.
router.get("/:account_number",auth, function(req, res){
  let { account_number } = req.params;
  const text = 'SELECT "id", "username", "password", "email" FROM "accounts" WHERE "id" = $1';
  pool.query(text, [account_number], (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post("/", (req, res) => {
  let { username, password, email } = req.body;
  const text = 'INSERT INTO public."accounts"("username", "password", "email") VALUES ($1, $2, $3);'
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
  const text = 'SELECT "id","password" FROM public."accounts" where "username" = $1;'    
  try {
    let { username, password } = req.body;
    pool.query(text, [username], (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
        }
      try {    
        isMatch(password,result.rows[0].password).then(match =>
        {
          console.log(match)
          if(match){
              generateAuthToken({id: result.rows[0].id,username: username}).then(token => {
              res.status(200).send({"messege": "Log In Successful","jwt":token});
              }
            )       
          } else {
              res.status(400).send("Incorrect username or password");
          }      
       }
      )} catch(e){
      res.status(400).send("Incorrect username or password");
    }
  })
  } catch(e) {
      res.status(400).send("Incorrect username or password");
    }
});

router.delete("",auth, (req, res) => {
  let { username } = req.body;
  const text = 'DELETE FROM public."accounts" where "username" = $1;'    
  pool.query(text, [username], (err, result) => {
    if (err) {
        console.log(err);
        res.status(400).send(err);
      }
    
    res.status(204).send({"result": "Account successfully deleted"});
    
  })
});

module.exports = router;
