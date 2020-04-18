const bcrypt = require("bcryptjs");
const getPassword = require("../database/models/getPassword");
const jwt = require("jsonwebtoken");
const signinPageHandler = require("./signinPageHandler")
const SECRET = process.env.JWT_SECRET;

function signinPostHandler(req, res) {
    const user = req.body;
    const username = user.username.toLowerCase();
    getPassword(username)
     .then(dbPassword => bcrypt.compare(user.password, dbPassword))
     .then(match => {
        if (!match) {
            req.badPassword = true;
            const html = signinPageHandler(req,res);
            res.status(402).send(html)
        } else {
            const payload = { username }
            token = jwt.sign(payload, SECRET)
            res.cookie("token", token, { maxAge: 600000 });
            res.redirect("/");
        }
     })
     .catch(error => {
        console.log(error)
        res.status(502).send('<h1>You failed to sign up</h1>')
    }) 
}

module.exports = signinPostHandler;