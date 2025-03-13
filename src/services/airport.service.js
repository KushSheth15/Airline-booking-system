const { StatusCodes } = require('http-status-codes');
const {AirportRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        if(error.name === 'TypeError') {
            throw new AppError('Cannot Create a new airport Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot Fetch data of all airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try {
        const airports = await airportRepository.get(id);
        return airports;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('airport not found!',error.statusCode);
        }
        throw new AppError('Cannot Fetch data of all airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirport(id){
    try {
        const airports = await airportRepository.destroy(id);
        return airports;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('airports not found!',error.statusCode);
        }
        throw new AppError('Cannot Delete airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,updateData) {
    try {
        const airports = await airportRepository.update(id,updateData);
        return airports;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError('Airport not found!',error.statusCode);
        }
        throw new AppError('Cannot Update airports',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirport,
    getAirports,
    deleteAirport,
    updateAirport
}