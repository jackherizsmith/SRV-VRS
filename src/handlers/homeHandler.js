const getTools = require('../database/models/getTools');

const homeTemplate = require('../templates/homeTemplate');

const missingHandler = require('./missingHandler');


function homeHandler(req, res) {
   getTools()
   .then(tools => {
   req.tools = tools;
      if (req.user){
         req.addTool = '<a class="nav-button" href="/add">Add a tool</a>';
         req.signLinks = '<div class="sign-link"><a href="/signout">sign out</a></div>';
      }
      else {
         req.addTool = "";
         req.signLinks = '<div class="sign-link"><a href="/signin">sign in</a><span>/</span><a href="signup">sign up</a></div>';
      }
      const html = homeTemplate(req,res);
      res.send(html)
   })
   .catch(error => {
      console.error(error)
      missingHandler(req, res)
   })
}

module.exports = homeHandler;