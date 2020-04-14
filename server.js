const express = require('express');
const cookie = require('cookie-parser');

const logger = require('./middleware/logger');
const getUser = require('./middleware/getUser');
const checkAuth = require('./middleware/checkAuth');
const handleErrors = require('./middleware/handleErrors');

const homeHandler = require('./handlers/homeHandler');
const addPageHandler = require('./handlers/addPageHandler');
const addToolHandler = require('./handlers/addToolHandler');
const signupHandler = require('./handlers/signupPageHandler');
const signupPostHandler = require('./handlers/signupPostHandler');
const signinHandler = require('./handlers/signinPageHandler');
const signinPostHandler = require('./handlers/signinPostHandler');
const signoutHandler = require('./handlers/signoutHandler');
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
server.post("/create-tool", addToolHandler);
server.get("/signin", signinHandler);
server.post("/signin", signinPostHandler);

server.get("/signup", signupHandler);
server.post("/signup", signupPostHandler);

server.get("/signout", signoutHandler);
server.get("/:missing", missingHandler)

server.use(express.static("/public"));
server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));