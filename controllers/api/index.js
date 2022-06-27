const router = require('express').Router();

const userRoutes = require('./userRoutes');
const imageRoutes = require('./imageRoutes');

router.use('/images', imageRoutes);
router.use('/users', userRoutes);


module.exports = router;
