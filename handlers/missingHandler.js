const missingTemplate = require('../templates/missingTemplate');

function missingHandler(req, res) {
    const html = missingTemplate();
    res.send(html)
}

module.exports = missingHandler;