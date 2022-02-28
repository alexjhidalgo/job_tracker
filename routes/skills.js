const router = require("express").Router();
const pool = require("../db_config");
const auth = require("../middleware/auth");

////// Skill C.R.U.D.

//Get a single skills
router.get("/:skill_id",auth, function(req, res){
  const { skill_id } = req.params;
  if(typeof(skill_id) == "undefined")
  {
      var Error = {"Error":"The request object is missing at least one of the required attributes"}; 
      res.status(400).json({Error: Error});
  } else {
  const text = 'SELECT "id", "name", "account_id" FROM "skills" WHERE "id" = $1';
  pool.query(text, [skill_id], (err, result) => {
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.status(200).send(result.rows);
    }
  });
  }
});


//Get all skills for a given application
router.get("/application_skills/:application_id",auth, function(req, res){
  const { application_id } = req.params
  const account_id = res.locals.user.id
  const text = 'SELECT DISTINCT skills."name","skill_id" FROM application_skills INNER JOIN skills ON application_skills.skill_id = skills.id  WHERE "application_id" = $1 and application_skills."account_id" = $2;'
  pool.query(text, [application_id,account_id], (err, result) => {
    if (err) {
      res.status(400).json({error:err});
    } else {
      res.status(200).send(result.rows);
    }
  });
});

//Get all skills for a given account
router.get("",auth, function(req, res){
  const account_id = res.locals.user.id
  const text = 'SELECT "id", "name", "account_id" FROM "skills" WHERE "account_id" = $1';
  pool.query(text, [account_id], (err, result) => {
    if (err) {
      res.status(400).json({error:err});
    }
    res.status(200).send(result.rows);
  });
});


//Create a new skill
router.post("", auth, async (req, res) => {
  const { name, application_id }  = req.body;
  const account_id = res.locals.user.id

  if(typeof(req.body.name) == "undefined" || typeof(req.body.application_id) == "undefined")
  {
      var Error = {"Error":"The request object is missing at least one of the required attributes"}; 
      res.status(400).send(JSON.stringify(Error));
  } else {

  //Check if Skill exists and get Id 
  const getSkill = 'SELECT "id", "name", "account_id" FROM "skills" WHERE "account_id" = $1 and "name" = $2' ;
  skill_id = await pool.query(getSkill, [account_id,name]).then(result => {
    return result
  }).catch(err => {if(err) {
      console.log(err)
      res.status(400).json({error:Error});
     }
    }
  );

  //If skill does not exist Insert into skills and get id
    const createSkill = 'INSERT INTO public."skills"("account_id","name") VALUES ($1, $2);'
    if ( typeof(skill_id.rows[0]) == 'undefined') {
      console.log("starting here")
      skill_id =  await pool.query(createSkill, [account_id,name]).then(result => {
          return 
      }).then(res => {
          return pool.query(getSkill, [account_id,name])
      })
      .then(result => {
        return result
      }).catch(err => {
        if(err)
        {
          res.status(400).json({error:err});   
          console.log(err)}
        }
      )
    }
  
  const createApplicationSkill =  'INSERT INTO application_skills (application_id,skill_id,account_id) VALUES ($1,$2,$3);'
  const getApplicationSkill = 'SELECT "id" application_skill_id, "application_id","skill_id","account_id" FROM application_skills WHERE "application_id" = $1 and "skill_id" = $2 and "account_id" = $3;' 
  //Insert into application skills
    await pool.query(createApplicationSkill, [application_id,skill_id.rows[0].id,account_id]).then(result => {
      return
    }).then(res => {
      return pool.query(getApplicationSkill, [application_id,skill_id.rows[0].id,account_id])
   })
  .then(result => {
    res.status(200).send(result.rows);
    return result
  }).catch(err => {if(err) {
    res.status(400).json({error:err});    
    console.log(err)
    }})
    }
   }
  )
  
  router.patch("/:skill_id", auth, (req, res) => {
    const { name }   = req.body;
    const {skill_id} = req.params;
    const text = 'UPDATE public."skills" SET "name" = $1 WHERE id = $2;'
        pool.query(text, [name,skill_id], (err, result) => {
            if (err) {
              console.log(err);
              res.status(400).json({error:err});
            } else {
              res.status(200).send("Skill Updated");
            }
          });
    });

router.delete("/:skill_id",auth, (req, res) => {
  const { skill_id } = req.params;
  if(typeof(skill_id) == "undefined")
  {
      var Error = {"Error":"The request object is missing at least one of the required attributes"}; 
      res.status(400).json({Error: Error});
  } else {
  const text = 'DELETE FROM public."skills" where "id" = $1;'    
  pool.query(text, [skill_id], (err, result) => {
    if (err) {
        console.log(err);
        res.status(400).send(err);
    } else {
      res.status(204).json({result: "Skill successfully deleted"});
    }    
  })
}});

module.exports = router;
