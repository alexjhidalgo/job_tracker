//Postgressql credentials
PGHOST='localhost'
PGUSER=process.env.USER
PGDATABASE=process.env.USER
PGPASSWORD=
PGPORT=5432

var bodyParser = require('body-parser')

const express = require('express');
const res = require('express/lib/response');
const { Client } = require('pg');
var connectionString = "postgres://postgres:postgres@localhost:5432/Job_Seeker_Tables";
const client = new Client({
    connectionString: connectionString
});
client.connect();
const app = express()
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})
// parse application/json
app.use(bodyParser.json())
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

app.get('/account/:account_number', function (req, res, next) {
    let { account_number} = req.params
    const text = 'SELECT "Id", "Username", "Password", "Email" FROM public."Accounts" WHERE "Id" = $1'
    client.query(text, [account_number], (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
    res.status(200).send(result.rows);
    })
})

app.post("/account", (req, res) => {
    let { username, password, email } = req.body;
    const text = 'INSERT INTO public."Accounts"("Id", "Username", "Password", "Email") VALUES ((SELECT "Id" + 1 FROM public."Accounts" order by "Id" desc limit 1), $1, $2, $3);'
    const hashedPassword = hashPasswordFunction(req.body.password).then(hashedPassword => {
        client.query(text, [username,hashedPassword,email], (err, result) => {
            if (err) {
              console.log(err);
              res.status(400).send(err);
            }
            res.status(200).send("Account Created");
          });
    })
});

app.post("/account/login", (req, res) => {
    let { username, password } = req.body;
    const text = 'SELECT "Id","Password" FROM public."Accounts" where "Username" = $1;'    
    client.query(text, [username], (err, result) => {
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



app.delete('/account/:account_number',(req,res) => {
    let { account_number} = req.params
    res.send(`Here is placeholder code for deleting account ${account_number}`)
})
