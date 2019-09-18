const jwt = require('jsonwebtoken');
const secret = require('../config/secret.js');


//protection
module.exports = (req, res, next) => {
    // we'll read the username and password from headers
    // the client is responsible for setting those headers

    const token = req.headers.authorization
    if(token){
        jwt.verify(token, secret.jwtSecret, (err, decodeToken) =>{
            if(err){
                res.status(400).json({message: 'Cant pass'})
            }else{
                req.user = {username: decodeToken.username} 
                next()
            }
        } )
    } else{
        res.status(400).json({message: 'no token'})
    }
   
}