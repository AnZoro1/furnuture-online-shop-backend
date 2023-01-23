const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: String,
  imageSrc: {
    type: String,
    default: '',
  },
  price: Number,
  countProd: Number
})
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
