const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const imageRoutes = require('./image-Routes');

router.use('/images', imageRoutes);
router.use('/users', userRoutes);


module.exports = router;
