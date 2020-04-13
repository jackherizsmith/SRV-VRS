const getTools = require('../database/models/getTools');

const homeTemplate = require('../templates/homeTemplate');

const missingHandler = require('./missingHandler');


function homeHandler(req, res) {
    getTools()
     .then(tools => {
        const html = homeTemplate(tools);
        res.send(html)
     })
     .catch(error => {
        console.error(error)
        missingHandler(req, res)
     })
}

module.exports = homeHandler;