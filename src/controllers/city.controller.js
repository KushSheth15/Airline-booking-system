const {StatusCodes} = require('http-status-codes');

const {CityService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

async function createCity(req,res){
    try {
        const city = await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}

async function deleteCity(req,res) {
    try{
        const city = await CityService.deleteCity(req?.params?.id);
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        console.error("Error deleting city:", error);

        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createCity,
    deleteCity
}