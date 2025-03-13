const {StatusCodes} = require('http-status-codes');

const {AirportService} = require('../services');
const {SuccessResponse,ErrorResponse} = require('../utils/common');

async function createAirport(req,res){
    try {
        const airport = await AirportService.createAirport({
           name:req.body.name,
           code:req.body.code,
           address:req.body.address,
           city_id:req.body.city_id
        });
        SuccessResponse.data = airport;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode)
                  .json(ErrorResponse);
    }
}

async function getAirports(req,res) {
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirport(req,res) {
    try{
        const airports = await AirportService.getAirport(req?.params?.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function deleteAirport(req,res) {
    try{
        const airports = await AirportService.deleteAirport(req?.params?.id);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        console.error("Error deleting airport:", error);

        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirport(req,res) {
    try{
        const {id} = req.params;
        const updateData = req.body;

        const airports = await AirportService.updateAirport(id,updateData);
        SuccessResponse.data = airports;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }catch(error){
        console.error("Error update airport:", error);
        
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    deleteAirport,
    updateAirport
}