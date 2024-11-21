module.exports = (req, res, _) => {
  if (!req.session.isLoggedIn) {
    return res.redirect('/login')
  }
}