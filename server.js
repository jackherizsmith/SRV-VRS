const express = require('express');
const cookie = require('cookie-parser');

const logger = require('./middleware/logger');
const getUser = require('./middleware/getUser');
const checkAuth = require('./middleware/checkAuth');
const handleErrors = require('./middleware/handleErrors');

const homeHandler = require('./handlers/homeHandler');
const addToolHandler = require('./handlers/addToolHandler');
const addToolPostHandler = require('./handlers/addToolPostHandler');
const signupHandler = require('./handlers/signupPageHandler');
const signupPostHandler = require('./handlers/signupPostHandler');
const signinHandler = require('./handlers/signinPageHandler');
const signinPostHandler = require('./handlers/signinPostHandler');
const signoutHandler = require('./handlers/signoutHandler');
const missingHandler = require('./handlers/missingHandler');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cookie());
server.use(express.urlencoded({extended : false}));
server.use(logger);
server.use(getUser);

server.get("/", homeHandler);

server.get("/signup", signupHandler);
server.post("/signup", signupPostHandler);

server.get("/signin", signinHandler);
server.post("/signin", signinPostHandler);

server.get("/add", checkAuth, addToolHandler);
server.post("/add", checkAuth, addToolPostHandler);

server.get("/signout", signoutHandler);
server.use(express.static("public"));

server.get("/:missing", missingHandler)
server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));