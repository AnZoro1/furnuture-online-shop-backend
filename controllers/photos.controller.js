const Photo = require('../models/Photo.model')

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

const PhotoController = {
  createPhoto: async (req, res) => {
    try {
      const photo = await Photo.create({
        name: req.body.name,
        imageSrc: req.file ? req.file.path : '',
      })

      await photo.save()
      res.status(201).json(photo)
    } catch (err) {
      res.json({ error: err.message })
    }
  },
  getAllPhotos: async (req, res) => {
    try {
      const photo = await Photo.find()
      res.status(201).json(photo)
    } catch (error) {
      res.json({ error: err.message })
    }
  },
}
module.exports = PhotoController
