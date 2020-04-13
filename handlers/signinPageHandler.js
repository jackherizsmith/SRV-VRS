const signinPageTemplate = require('../templates/signinPageTemplate');

function signinPageHandler(req, res) {
    const html = signinPageTemplate('', 'signin')
    res.end(html)
    res.on('error', error => {
      console.error(error)
      missingHandler(req, res)
    })
  }

  module.exports = signinPageHandler;