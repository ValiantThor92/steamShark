const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Album, Image } = require('../models');


router.get('/', withAuth, (req, res) => {
  console.log('======================');
  Album.findall({
    attributes: [
      'user_id',
    ],
    include: [
      {
        model: Image,
        attributes: ['user_id', 'image_id'],
        include: {
          model: User,
        }
      },

    ]
  })
  .then(albumData => {
    const userData = albumData.map(post => post.get({ plain: true }));
    res.render('album', {
        image,
        logged_in: true
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//route to login to account
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

// route to get the images to album
router.get('/album', withAuth, async (req, res) => {
    try {
      console.log("**********")
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: "album" }]
      })
      const user = userData.get({ plain: true });
      
      res.render('album', {
        ...user,
        logged_in: true
      });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/upload', withAuth, async (req, res) => {
    try {
        res.render('upload', {logged_in: req.session.logged_in})
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;