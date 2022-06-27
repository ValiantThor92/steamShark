const router = require('express').Router();
const { User } = require('../../models');

// Route to create an account and register a new user
router.post('/', (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(userData => {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
  
        res.json(userData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// route for user sign in
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userData => {
    if (!userData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
  
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  });
});

// route for logging out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

module.exports = router;