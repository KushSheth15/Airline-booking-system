const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber ||!req.body.capacity){
        ErrorResponse.message = 'Something Went wrong while creating airplane';
        ErrorResponse.error = {explanation:'ModelNumber and capacity are required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
};