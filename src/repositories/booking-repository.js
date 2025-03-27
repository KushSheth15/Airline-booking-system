const CrudRepository = require('./crud-repository');
const {Booking} = require('../models/index');

class BookingRepository extends CrudRepository {
    constructor(){
        super(Booking);
    }
    
}

module.exports = BookingRepository;