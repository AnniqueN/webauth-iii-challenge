const router = require('express').Router();
const users = require('./user-model.js');


const restricted = require('../auth/restricted_middleware.js')


router.get('/', restricted, (req, res) => {
   return users.find()
        .then(user => {
            res.status(200).json({loggedInUser: req.user.username, user})
        })
        .catch(err => {
            res.status(400).json({ message: 'Could not retrieve users, make sure you are logged in.' })
        })
})


module.exports = router;