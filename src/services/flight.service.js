const { StatusCodes } = require('http-status-codes');
const {Op} = require('sequelize');
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

async function getAllFlights(query){
    let customeFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00"

    if(query.trips){
        [departureAirportId,arrivalAirportId] = query.trips.split("-");
        customeFilter.departureAirportId = departureAirportId;
        customeFilter.arrivalAirportId = arrivalAirportId;
    }
    if(query.price){
        [minPrice,maxPrice] = query.price.split("-");
         customeFilter.price = {
            [Op.between]:[minPrice,((maxPrice === undefined) ? 40000:maxPrice)]
        };
    }
    if(query.travellers){
        customeFilter.totalSeats = {
            [Op.gte]:query.travellers
        }
    }
    if(query.tripDate){
        customeFilter.departureTime = {
            [Op.between]: [query.tripDate,query.tripDate + endingTripTime]
        }
    }
    if(query.sort){
        const params = query.sort.split(',')
        const sortFilters = params.map((param)=> param.split('_'));
        sortFilter = sortFilters
    }
    try {
        const flights = await flightRepository.getAllFlights(customeFilter,sortFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot Fetch data of all flights',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createFlight,
    getAllFlights
}