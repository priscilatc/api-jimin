const {Router} = require('express');
const router = Router();

const {getPhotos, getPhotosByColor, welcome} = require('../controllers/index.controller')

router.get('/', welcome);
router.get('/photos', getPhotos);
router.get('/photos/:color', getPhotosByColor);

module.exports= router;