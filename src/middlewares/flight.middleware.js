const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req,res,next){
    if(!req.body?.flightNumber){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'flightNumber is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.airplaneId){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'airplaneId is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.departureAirportId){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'departureAirportId is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.arrivalAirportId){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'arrivalAirportId is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.arrivalTime){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'arrivalTime is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.departureTime){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'departureTime is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.price){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'price is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body?.totalSeats){
        ErrorResponse.message = 'Something Went wrong while creating flights';
        ErrorResponse.error = {explanation:'totalSeats is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if(!req.body?.seats){
        ErrorResponse.message = 'Something Went wrong while seats';
        ErrorResponse.error = {explanation:'seats is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
    validateUpdateSeatsRequest
};