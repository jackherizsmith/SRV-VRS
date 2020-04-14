function signoutHandler(req, res) {
    res.clearCookie('token');
    res.redirect('/');
}

module.exports = signoutHandler;