const jwt = require('jsonwebtoken')


const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token,'cs467capstone')
        res.locals.user = { id: decoded.id, username: decoded.username };
        next();
    } catch(e){
        res.status(401).send({error:"Invalid Auth"})
    }
}

module.exports = auth