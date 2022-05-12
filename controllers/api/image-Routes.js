const router = require('express').Router();
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');
const { User, Image } = require('../../models');

// add new photo
router.post('/', withAuth, upload.single('image'), (req, res) => {
  const filepath = req.file.path.split("\\")

  Image.create({
      path_name: filepath[2],
      user_id: req.session.user_id,
      image_id: req.file.image_id,
  })
  .then(imageData => res.json(imageData))
  .catch (err => {
    alert(err)
    res.render('upload')
  })

});

// delete a photo
router.delete('/:id', withAuth, async (req, res) => {
  try {
      const imageData = await Image.destroy({
          where: {
              id: req.params.id,
              user_id: req.session.user_id,
          },
      });
      if (!imageData) {
          res.status(404).json({ message: 'Could not find a image with that id' })
      }

      res.status(200).json(imageData);
  } catch (err) {
      res.status(400).json(err);
  }
});

module.exports = router;