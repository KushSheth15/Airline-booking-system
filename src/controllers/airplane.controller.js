const {StatusCodes} = require('http-status-codes');

const {AirplaneService} = require('../services');

async function createAirplane(req,res){
    try {
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        return res
                .status(StatusCodes.CREATED)
                .json({
                    success:true,
                    message:'Successfully Create an airplane',
                    data:airplane,
                    error:{}
                });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({
                    success:false,
                    message:'An error occurred while creating the airplane',
                    data:{},
                    error:error  
                  });
    }
}

module.exports = {
    createAirplane
}