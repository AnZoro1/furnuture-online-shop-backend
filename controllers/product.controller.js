const Product = require('../models/Product.model')

/* const PhotoController = {            
  createPhoto: async (req, res) => {
    const photo = new Photo({   // Сделано по видео от Владилена, внизу сделал сам как обычно без new Photo
      imageSrc: req.file ? req.file.path : '',
    })

    try {
      await photo.save()
      res.status(201).json(photo)
    } catch (err) {
      res.json({ error: err.message })
    }
  },
} */

const ProductController = {
  createProduct: async (req, res) => {
    try {
      const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        imageSrc: req.file ? req.file.path : '',
      })

      await product.save()
      res.status(201).json(product)
    } catch (err) {
      res.json({ error: err.message })
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find()
      res.status(201).json(products)
    } catch (error) {
      res.json({ error: err.message })
    }
  },
}
module.exports = ProductController
