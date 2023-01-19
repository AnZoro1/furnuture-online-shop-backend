const User = require('../models/User.model')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find()
      res.json(users)
    } catch (err) {
      res.json({error: err.message})
    }
  },
  registerUsers: async (req, res) => {
    try {
      const { BCRYPT_ROUNDS } = process.env

      const hash = await bcrypt.hash(req.body.password, Number(BCRYPT_ROUNDS))

      const user = await User.create({
        login: req.body.login,
        password: hash,
        email: req.body.email,
      })
      res.json(user)
    } catch (err) {
      res.json({ error: err.message })
    }
  },
  login: async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })

    if (!candidate) {
      return res.status(401).json({ error: 'Неверный логин' })
    }

    const valid = await bcrypt.compare(req.body.password, candidate.password)

    if (!valid) {
      return res.status(401).json({ error: 'Неверный пароль' })
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    }

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: '24h',
    })

    res.json(token)
  },
}

module.exports = UserController
