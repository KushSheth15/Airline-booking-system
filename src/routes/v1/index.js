const express = require('express');

const {InfoController} = require('../../controllers/index');
const airplaneRoutes = require('./airplane.routes');
const citiesRoutes = require('./city.routes');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/airplane', airplaneRoutes);
router.use('/cities', citiesRoutes);

module.exports = router;