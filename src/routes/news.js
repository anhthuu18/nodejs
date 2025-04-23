const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

//Luôn ở dưới cùng: để match các phần bên trên trước mới tới nó
router.use('/', newsController.index);


module.exports = router;