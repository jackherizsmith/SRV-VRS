const express = require("express");
const cookie = require("cookie-parser");

const logger = require("./src/middleware/logger");
const getUser = require("./src/middleware/getUser");
const checkAuth = require("./src/middleware/checkAuth");
const handleErrors = require("./src/middleware/handleErrors");

const homeHandler = require("./src/handlers/homeHandler");
const checkName = require("./src/handlers/checkUser");
const checkEmail = require("./src/handlers/checkUserByEmail");
const addToolHandler = require("./src/handlers/addToolHandler");
const addToolPostHandler = require("./src/handlers/addToolPostHandler");
const signupHandler = require("./src/handlers/signupPageHandler");
const signupPostHandler = require("./src/handlers/signupPostHandler");
const signinHandler = require("./src/handlers/signinPageHandler");
const signinPostHandler = require("./src/handlers/signinPostHandler");
const signoutHandler = require("./src/handlers/signoutHandler");
const missingHandler = require("./src/handlers/missingHandler");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cookie());
server.use(express.json());
server.use(express.urlencoded({extended : false}));
server.use(logger);
server.use(getUser);

server.get("/", homeHandler);
server.get("/check-username/:username", checkName);
server.get("/check-email/:email", checkEmail);

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