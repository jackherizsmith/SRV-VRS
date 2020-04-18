const missingTemplate = require('../templates/missingTemplate');

function missingHandler(req, res) {
    const html = missingTemplate(req, res);
    res.send(html);
}

module.exports = missingHandler;