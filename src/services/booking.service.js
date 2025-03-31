const axios = require('axios');
const {ServerConfig} = require('../config')
const {BookingRepository} = require('../repositories');
const db = require('../models');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const {Enums} = require('../utils/common');
const {BOOKED,CANCELLED,INITIATED,PENDING} = Enums.BOOKING_STATUS;

const bookingRepository = new BookingRepository();
async function createBooking(data){
    const transaction = await db.sequelize.transaction();
    try {
        const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
        const flightData = flight.data.data;
        if(data.noOfSeats > flightData.totalSeats){
            throw new AppError('Required no of seats not availble!',StatusCodes.BAD_REQUEST);
        }

        const totalBillingAmount = data.noOfSeats * flightData.price;
        const bookingPayload = {...data,totalCost:totalBillingAmount};
        const booking = await bookingRepository.createBooking(bookingPayload,transaction);

        await axios.patch(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}/seats`,{
            seats:parseInt(data.noOfSeats)
        }
    );

        await transaction.commit();

        return booking;
    } catch (error) {
        console.error('Error creating booking:', error.response?.data || error.message);
        await transaction.rollback();
        throw error;
    }
}

async function makePayment(data){
    const transaction = await db.sequelize.transaction();
    try {
        const bookingDetails = await bookingRepository.get(data.bookingId,transaction);
        if(bookingDetails.status === CANCELLED){
            throw new AppError('Booking is already cancelled',StatusCodeS.BAD_REQUEST);
        }
        const bookingTime = new Date(bookingDetails.createdAt);
        const currentTime = new Date();
        if(currentTime - bookingTime > 300000){
            await bookingRepository.update(data.bookingId,{status:CANCELLED},transaction)
            throw new AppError('Payment time limit exceeded',StatusCodes.BAD_REQUEST);
        }
        if(bookingDetails.totalCost != data.totalCost){
            throw new AppError('The amount of payment doesnt match',StatusCodes.BAD_REQUEST);
        }
        if(bookingDetails.userId != data.userId){
            throw new AppError('User does not match',StatusCodes.BAD_REQUEST);
        }
        await bookingRepository.update(data.bookingId,{status:BOOKED},transaction)
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
}

module.exports = {
    createBooking,
    makePayment
}