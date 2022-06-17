const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const imageRoutes = require('./image-routes');

router.use('/image', imageRoutes);
router.use('/user', userRoutes);


module.exports = router;
