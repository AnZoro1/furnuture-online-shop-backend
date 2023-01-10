const { Router } = require('express')
const BasketController = require('../controllers/basket.controller')
const fileMiddleware = require('../middlewares/file.middleware')

const router = Router()

router.post('/baskets', BasketController.addProductsInBasket)
router.get('/baskets', BasketController.getProductsFromBasket)
router.delete('/baskets/:id', BasketController.deleteProductFromBasket)

module.exports = router
