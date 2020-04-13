const signupPageTemplate = require('../templates/signupPageTemplate')
const missingHandler = require('./missingHandler')

function signupPageHandler(req, res) {
    const html = signupPageTemplate()
    res.send(html);
    res.on('error', error => {
      console.error(error)
      missingHandler(request, response)
    })
  }

  module.exports = signupPageHandler;