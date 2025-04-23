const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.use('/search', siteController.search);

//Luôn ở dưới cùng: để match các phần bên trên trước mới tới nó
router.use('/', siteController.index);


module.exports = router;