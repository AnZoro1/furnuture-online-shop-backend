const mongoose = require('mongoose')

const BasketSchema = mongoose.Schema({
  name: String,
  imageSrc: {
    type: String,
    default: '',
  },
  price: String,
})

const Basket = mongoose.model('Basket', BasketSchema)

module.exports = Basket
