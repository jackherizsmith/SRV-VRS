const addPageTemplate = require('../templates/addPageTemplate')
const missingHandler = require('./missingHandler');


function addPageHandler(req, res) {
    const html = addPageTemplate(req,res)
    res.send(html)
    res.on('error', error => {
      console.error(error)
      missingHandler(req, res)
    })
}

module.exports = addPageHandler;