const { Router } = require('express')

const ProductController = require('../controllers/product.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const fileMiddleware = require('../middlewares/file.middleware')

const router = Router()

router.post(
  '/products',
  fileMiddleware.single('image'), // так как тут указали имя файла image то обязательно нужно его указывать точно в соответствии и на фронте в FormData как key. Именно из за этого у меня была ошибка и я не мог отправлять изображения, тут у меня стояло имя image, а там в паре ключ значение в санке стояло в formData.append('img', image -(это локальный стейт из другого компонента переданный санке)) и именно из за моего названия 'img' у меня и была ошибка. Они должны точно соответствовать.
  ProductController.createProduct
)
router.get('/products', ProductController.getAllProducts)
router.delete('/products/:id', ProductController.deleteProduct)

module.exports = router
