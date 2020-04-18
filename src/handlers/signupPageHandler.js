const signupPageTemplate = require("../templates/signupPageTemplate");
const missingHandler = require("./missingHandler");

function signupPageHandler(req, res) {
    const html = signupPageTemplate(req, res);
    res.send(html);
    res.on("error", error => {
        console.error(error);
        missingHandler(req, res);
    })
}

  module.exports = signupPageHandler;