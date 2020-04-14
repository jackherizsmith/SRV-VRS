const jwt = require('jsonwebtoken');
const createTool = require('../database/models/createTool')


function addToolHandler(req, res) {
    jwt.verify(req.cookies.token, 'survivethevirus',(err, decoded) => {
        tool = req.body;
        tool.username = decoded.username;
    })
    createTool(tool)
        .then(() => {
          res.redirect('/')
        })
        .catch(error => {
          console.log(error)
          res.status(502).send(`<h1>Something went wrong saving your data</h1>`)
        })
}

module.exports = addToolHandler;