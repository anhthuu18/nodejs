const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

//Luôn ở dưới cùng: để match các phần bên trên trước mới tới nó
router.get('/', siteController.index);

module.exports = router;
