
   
const router = require('express').Router();
const withAuth = require('../../utils/auth');
const upload = require('../../utils/upload');
const { Image } = require('../../models');


router.post('/', withAuth, upload.single('image'), async (req, res) => {
    const filepath = req.file.path.split("\\")
    try {
        const newImage = await Image.create({
            path_name: filepath[2],
            user_id: req.session.user_id,
        });
        res.render('upload', {logged_in: req.session.logged_in})
    } catch (err) {
        alert(err)
        res.render('upload')
    }

});

module.exports = router;