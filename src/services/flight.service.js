const { StatusCodes } = require('http-status-codes');
const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datetime.helper');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        if (compareTime(data.departureTime, data.arrivalTime) >= 0) {
            throw new AppError('Departure time must be earlier than arrival time', StatusCodes.BAD_REQUEST);
        }

        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name === 'TypeError') {
            throw new AppError('Cannot Create a new flight Object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}
module.exports = {
    createFlight,
   
}