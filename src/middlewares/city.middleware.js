const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/common');
function validateCreateRequest(req,res,next){
    if(!req.body?.name){
        ErrorResponse.message = 'Something Went wrong while creating city';
        ErrorResponse.error = {explanation:'City Name is required. Something is wrong!'}
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
};