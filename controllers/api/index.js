const router = require('express').Router();

const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');

router.use('/images', imageRoutes);
router.use('/users', userRoutes);


module.exports = router;
