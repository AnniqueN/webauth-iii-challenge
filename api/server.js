const express = require('express');
const helmet = require('helmet')
const cors = require('cors');

const session = require('express-session')

const usersRouter = require('../users/user-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

// configure express-session middleware

const sessionConfig = {
    name: 'SooSoft', // name of cookie- default name for cookies is "sid" if you don't provide cookie, change name to make it harder for hackers
    secret: 'it is none of your business!', // encrypts cookie
    cookie: {
        maxAge: 1000 * 30 * 1800,// (30 minutes) //specify how long the session will be valid for in milliseconds. will expire after this
        secure: false, //can you send cookie over un-encrypted connection http. can be false during development but true during production
        httpOnly: true, //cookie can't be accessed through javascript
    },
    resave: false, // recreate a session even if nothing has changed
    saveUninitialized: false, //Will set based on if user has opted in on allowing cookies to be set for them. If yes, this will be true.  GDPR compliance, laws against setting cookies automatically.
};


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({ api: 'up' });
});


module.exports = server; 