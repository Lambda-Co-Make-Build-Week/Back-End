const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./secrets')


module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'we wants token' })
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'token bad' })
    }
    req.decodedJwt = decoded
    next()
  })
};
