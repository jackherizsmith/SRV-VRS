const signinPageTemplate = require("../templates/signinPageTemplate");

function signinPageHandler(req, res) {
    const html = signinPageTemplate(req, res);
    res.send(html);
    res.on("error", error => {
      console.error(error);
      missingHandler(req, res);
    });
  }

  module.exports = signinPageHandler;