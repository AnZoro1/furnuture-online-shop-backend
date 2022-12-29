const mongoose = require('mongoose')

const PhotoSchema = mongoose.Schema({
  name: String,
  imageSrc: {
    type: String,
    default: '',
  },
})
const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = Photo
