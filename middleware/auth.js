const jwt = require('jsonwebtoken')


const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token,'cs467capstone')
        next()
    } catch(e){
        res.status(401).send({error:"Invalid Auth"})
    }
}

module.exports = auth