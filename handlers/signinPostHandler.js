const bcrypt = require('bcryptjs');
const getPassword = require('../database/models/getPassword');
const jwt = require('jsonwebtoken');

function signinPostHandler(req, res) {
    const user = req.body;
    console.log(user)
    getPassword(user.username)
     .then(dbPassword => bcrypt.compare(user.password, dbPassword))
     .then(match => {
        if (!match) {
            res.status(402).send(`<h1>Something went wrong logging in</h1>`)
        } else {
            const payload = { username: user.username }
            token = jwt.sign(payload, 'survivethevirus')
            res.cookie("token", token, { maxAge: 600000 });
            res.redirect("/");
        }
     })
     .catch(error => {
        console.log(error)
        res.status(502).send(`<h1>You failed to sign up</h1>`)
    }) 
}

module.exports = signinPostHandler;