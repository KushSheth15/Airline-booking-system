const express = require('express');

const {BookingController} = require('../../controllers');
// const {CityMiddleware} = require('../../middlewares');

const router = express.Router();

router.post('/', BookingController.createBooking);


module.exports = router;