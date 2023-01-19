const { Router } = require('express')
const BasketController = require('../controllers/basket.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const fileMiddleware = require('../middlewares/file.middleware')

const router = Router()

router.post('/baskets', authMiddleware, BasketController.addProductsInBasket)
router.get('/baskets', authMiddleware, BasketController.getProductsFromBasket)
router.delete(
  '/baskets/:id',
  authMiddleware,
  BasketController.deleteProductFromBasket
)

module.exports = router
