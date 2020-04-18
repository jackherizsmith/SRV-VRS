const addToolTemplate = require('../templates/addToolTemplate')
const missingHandler = require('./missingHandler');


function addToolHandler(req, res) {
    const html = addToolTemplate(req,res)
    res.send(html)
    res.on('error', error => {
      console.error(error)
      missingHandler(req, res)
    })
}

module.exports = addToolHandler;