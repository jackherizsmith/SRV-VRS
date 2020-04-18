const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;

const checkUser = require("../database/models/checkUser");
const createUser = require("../database/models/createUser");


function signupPostHandler(req, res) {
    const user = req.body;
    const username = user.username.toLowerCase();
    checkUser(username)
    .then(result => {
        if (result) {
            html = /*html*/`<h1>You failed to sign up because user ${username} exists</h1>`
            res.send(html)
        } else {
            bcrypt
            .genSalt(10)
            .then(salt => bcrypt.hash(user.password, salt))
            .then(hash => createUser({ username, password: hash }))
            .then(() => {
                const payload = { username }
                token = jwt.sign(payload, SECRET)
                res.cookie("token", token, { maxAge: 600000 });
                res.redirect("/");
            })
            .catch(error => {
                console.log(error)
                res.status(502).send('<h1>You failed to sign up</h1>')
            })
        }
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = signupPostHandler;