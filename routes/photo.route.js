const { Router } = require('express')
const PhotoController = require('../controllers/photos.controller')
const fileMiddleware = require('../middlewares/file.middleware')

const router = Router()

router.post(
  '/images',
  fileMiddleware.single('image'),
  PhotoController.createPhoto
)
router.get('/images', PhotoController.getAllPhotos)

module.exports = router
