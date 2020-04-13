const jwt = require('jsonwebtoken');

function getUser(req, res, next){
    const token = req.cookies;
    if (token.user) {
      const user = jwt.verify(token.uer, SECRET);
      req.user = user;
    }
    next();
}

module.exports = getUser;