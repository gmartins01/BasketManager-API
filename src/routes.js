const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.get('/',controller.returnOk);
router.get('/elements',controller.getElements);
router.post('/count',controller.countElements);
router.post('/sort',controller.sortElements)

module.exports = router;