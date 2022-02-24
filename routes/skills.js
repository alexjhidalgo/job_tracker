const router = require("express").Router();
const pool = require("../db_config");
const auth = require("../middleware/auth");

////// Skill C.R.U.D.
router.get("/:skill_id",auth, function(req, res){
  const { skill_id } = req.params;
  const text = 'SELECT "id", "name", "account_id" FROM "skills" WHERE "id" = $1';
  pool.query(text, [skill_id], (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.get("",auth, function(req, res){
  const account_id = res.locals.user.id
  const text = 'SELECT "id", "name", "account_id" FROM "skills" WHERE "account_id" = $1';
  pool.query(text, [account_id], (err, result) => {
    if (err) {
      res.status(400).send(err);
    }
    res.status(200).send(result.rows);
  });
});

router.post("", auth, (req, res) => {
  const { name }  = req.body;
  const account_id = res.locals.user.id
  const text = 'INSERT INTO public."skills"("name", "account_id") VALUES ($1, $2);'
      pool.query(text, [name,account_id], (err, result) => {
          if (err) {
            console.log(err);
            res.status(400).send(err);
          }
          res.status(200).send("Skill Created");
        });
  });

  router.patch("/skill_id", auth, (req, res) => {
    const { name }   = req.body;
    const {skill_id} = req.params;
    const text = 'UPDATE public."skills""name" = $1 WHERE id = $2;'
        pool.query(text, [name,skill_id], (err, result) => {
            if (err) {
              console.log(err);
              res.status(400).send(err);
            }
            res.status(200).send("Skill Updated");
          });
    });

router.delete("/:skill_id",auth, (req, res) => {
  const { skill_id } = req.params;
  const text = 'DELETE FROM public."skills" where "id" = $1;'    
  pool.query(text, [skill_id], (err, result) => {
    if (err) {
        console.log(err);
        res.status(400).send(err);
      }
    
    res.status(204).send({"result": "Skill successfully deleted"});
    
  })
});

module.exports = router;
