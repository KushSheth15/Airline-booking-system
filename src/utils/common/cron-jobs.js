const cron = require('node-cron');

const bookingService = require('../../services/booking.service');
function scheduleCrons(){
    cron.schedule(`*/10 * * * *`,async ()=>{
        const response = await bookingService.cancelOldBookings();
        console.log('Old Bookings Cancelled:',response);
    })
}
module.exports = scheduleCrons;