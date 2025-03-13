const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = 'Something Went wrong while creating airport';
        ErrorResponse.error = {explanation:'Name is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = 'Something Went wrong while creating airport';
        ErrorResponse.error = {explanation:'Airport code is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.city_id){
        ErrorResponse.message = 'Something Went wrong while creating airport';
        ErrorResponse.error = {explanation:'CityId is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
};