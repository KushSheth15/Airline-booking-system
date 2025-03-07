const express = require('express');

const {InfoController} = require('../../controllers/index');
const airplaneRoutes = require('./airplane.routes');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/airplane', airplaneRoutes);

module.exports = router;