const { Router } = require('express')
const UserController = require('../controllers/users.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.get('/users', authMiddleware, UserController.getAllUsers)
router.post('/auth', UserController.registerUsers)
router.post('/login', UserController.login)

module.exports = router
