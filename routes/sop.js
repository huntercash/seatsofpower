const express = require('express');
const router = express.Router();
const { sopsearch } = require('../controllers/sop');

router.get('/sop/:stars?', sopsearch);
router.get('/test', (req, res) => res.send('Hello World!'));

module.exports = router;
