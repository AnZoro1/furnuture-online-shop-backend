const Basket = require('../models/Basket.model')

const BasketController = {
  addProductsInBasket: async (req, res) => {
    try {
      const products = await Basket.create({
        name: req.body.name,
        price: req.body.price,
        imageSrc: req.body.image,
      })

      await products.save()
      res.status(201).json(products)
    } catch (err) {
      res.json({ error: err.message })
    }
  },

  getProductsFromBasket: async (req, res) => {
    try {
      const products = await Basket.find()
      res.status(201).json(products)
    } catch (error) {
      res.json({ error: err.message })
    }
  },
  deleteProductFromBasket: async (req, res) => {
    try {
      const products = await Basket.findByIdAndRemove(req.params.id, {
        new: true,
      })
      res.json(products)
    } catch (err) {
      return res.json({error: err.message})
    }
  },
}

module.exports = BasketController
