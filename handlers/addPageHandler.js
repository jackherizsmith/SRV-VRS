const addPageTemplate = require('../templates/addPageTemplate')
const missingHandler = require('./missingHandler');


function addPageHandler(req, res) {
    const html = addPageTemplate()
    res.send(html)
    res.on('error', error => {
      console.error(error)
      missingHandler(request, response)
    })
}

module.exports = addPageHandler;