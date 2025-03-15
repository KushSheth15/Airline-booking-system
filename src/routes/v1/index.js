const express = require('express');

const {InfoController} = require('../../controllers/index');
const airplaneRoutes = require('./airplane.routes');
const citiesRoutes = require('./city.routes');
const airportRoutes = require('./airport.routes');
const flightRoutes = require('./flight.routes');

const router = express.Router();

router.get('/info', InfoController.info);
router.use('/airplane', airplaneRoutes);
router.use('/cities', citiesRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);

module.exports = router;