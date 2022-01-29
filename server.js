//Postgressql credentials
PGHOST='localhost'
PGUSER=process.env.USER
PGDATABASE=process.env.USER
PGPASSWORD=
PGPORT=5432

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

app.post('/account',(req,res) => 
{
    res.send(`Here is placeholder code for creating an account`)
})

app.delete('/account/:account_number',(req,res) => {
    let { account_number} = req.params
    res.send(`Here is placeholder code for deleting account ${account_number}`)
})
