const express = require('express');
const cookie = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { STATUS_CODES } = require("http");

const logger = require('./middleware/logger');
const getUser = require('./middleware/getUser');
const checkAuth = require('./middleware/checkAuth');
const handleErrors = require('./middleware/handleErrors');

const homeHandler = require('./handlers/homeHandler');
const addPageHandler = require('./handlers/addPageHandler');
const signinHandler = require('./handlers/signinPageHandler');
const signupHandler = require('./handlers/signupPageHandler');
const missingHandler = require('./handlers/missingHandler');

const PORT = process.env.PORT || 3000;
const SECRET = 'survivethevirus'

const server = express();

server.use(cookie());
server.use(express.urlencoded({extended : false}));
server.use(logger);
server.use(getUser);

server.get("/", homeHandler);
server.get("/add", addPageHandler);
server.post("/create-tool", (req, res) => {
    // verify token and post with tool data - redirect
});
server.get("/signin", signinHandler);
server.post("/signin", (req, res) => {
    // signin post and redirect and token creation
});
server.get("/signup", signupHandler);
server.post("/signup", (req, res) => {
    // signup post and redirect and token creation
});
server.get("/signout", (req, res) => {
    // clear cookie, redirect
});
server.get("/:missing", missingHandler)

server.use(express.static("/public"));
server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));