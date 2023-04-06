module.exports = (req, res, next) => {
  if (req.session.userSession) {
    res.locals.user = req.session.userSession;
  }
  next();
};
