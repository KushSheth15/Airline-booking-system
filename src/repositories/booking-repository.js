const CrudRepository = require('./crud-repository');
const {Booking} = require('../models/index');

class BookingRepository extends CrudRepository {
    constructor(){
        super(Booking);
    }
    
    async createBooking(data,transaction){
        const response = await Booking.create(data,{transaction:transaction});
        return response;
    }

    async get(data,transaction){
        const response = await Booking.findByPk(data,{transaction:transaction});
        if(!response){
            throw new Error('Not able to find resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async update(id,data,transaction){
        const response = await Booking.update(data,{
            where:{
                id:id
            }
        },{transaction:transaction});
        return response
    }
}

module.exports = BookingRepository;