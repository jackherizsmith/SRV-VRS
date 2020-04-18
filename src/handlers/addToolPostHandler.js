const jwt = require("jsonwebtoken");
const createTool = require("../database/models/createTool")


function addToolPostHandler(req, res) {
  tool = req.body;  
  tool.user = req.user;
  tool.date = new Date();
    createTool(tool)
        .then(() => {
          res.redirect("/")
        })
        .catch(error => {
          console.log(error)
          res.status(502).send("<h1>Something went wrong saving your data</h1>")
        })
}

module.exports = addToolPostHandler;