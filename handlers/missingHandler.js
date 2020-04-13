const missingTemplate = require('../templates/missingTemplate');

function missingHandler(req, res) {
    console.log(req.missing)
    const html = missingTemplate();
    res.send(html)
}

module.exports = missingHandler;